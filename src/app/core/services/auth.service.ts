import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, tap, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.loadUserFromStorage();
  }

  /**
   * Load user from localStorage on initialization.
   * Checks if running in browser to prevent SSR errors.
   */
  private loadUserFromStorage() {
    if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem('user');
      if (user) {
      try {
        this.currentUserSubject.next(JSON.parse(user));
      } catch (e) {
        console.error('Error parsing user from localStorage', e);
      }
    }
  }
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials).pipe(
      tap((response: any) => {
        if (response && response.data) {
          const { accessToken, refreshToken, user } = response.data;
          this.storeTokens(accessToken, refreshToken);
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('user', JSON.stringify(user));
          }
          this.currentUserSubject.next(user);
        }
      })
    );
  }

  logout(): void {
    const refreshToken = this.getRefreshToken();
    if (refreshToken) {
      // Optional: Call backend logout API to invalidate refresh token
      this.http.post(`${this.apiUrl}/auth/logout`, { refreshToken }).subscribe({
        next: () => this.clearStorage(),
        error: () => this.clearStorage()
      });
    } else {
      this.clearStorage();
    }
  }

  /**
   * Removes token from localStorage, clears stored user info, and resets state.
   */
  private clearStorage() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
    }
    this.currentUserSubject.next(null);
  }

  refreshToken(): Observable<any> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return throwError(() => new Error('No refresh token available'));
    }

    return this.http.post(`${this.apiUrl}/auth/refresh-token`, { token: refreshToken }).pipe(
      tap((response: any) => {
        if (response && response.data) {
          const { accessToken, refreshToken: newRefreshToken } = response.data;
          this.storeTokens(accessToken, newRefreshToken);
        }
      }),
      catchError(error => {
        // If refresh fails, log out user completely
        this.clearStorage();
        return throwError(() => error);
      })
    );
  }

  /**
   * Stores authentication tokens in localStorage safely
   */
  storeTokens(accessToken: string, refreshToken: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    }
  }

  /**
   * Retrieves access token safely
   */
  getAccessToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('accessToken');
    }
    return null;
  }

  /**
   * Retrieves refresh token safely
   */
  getRefreshToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('refreshToken');
    }
    return null;
  }

  /**
   * Helper to decode JWT token payload safely
   */
  private decodeToken(token: string): any {
    try {
      // Decode base64 payload from JWT
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } catch (e) {
      return null;
    }
  }

  /**
   * Checks whether the token exists.
   * If the token does not exist, the user is considered unauthenticated.
   */
  isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }

  /**
   * Checks if the currently logged-in user possesses any of the required permissions.
   */
  hasPermission(allowedPermissions: string | string[]): boolean {
    const required = Array.isArray(allowedPermissions) ? allowedPermissions : [allowedPermissions];
    if (required.length === 0) return true;

    const token = this.getAccessToken();
    if (!token) return false;

    const payload = this.decodeToken(token);
    if (!payload) return false;

    // Check if the JWT payload contains the permissions array provided by the backend
    if (payload.permissions && Array.isArray(payload.permissions)) {
      return required.some(perm => payload.permissions.includes(perm));
    }

    // Fallback: Use the role stored in the token if permissions array is missing
    if (payload.role) {
      return required.includes(payload.role);
    }

    return false;
  }
}
