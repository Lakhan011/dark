import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface CartItem {
  _id: string;
  productId: any;
  variantOption?: string;
  quantity: number;
  price: number;
  productName: string;
  thumbnail: string;
}

export interface CartSummary {
  subtotal: number;
  discount: number;
  tax: number;
  shipping: number;
  total: number;
  items: CartItem[];
  couponApplied: boolean;
  couponCode?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = `${environment.apiUrl}/cart`;

  private cartCountSubject = new BehaviorSubject<number>(0);
  public cartCount$ = this.cartCountSubject.asObservable();

  constructor(private http: HttpClient) {
    // Initial fetch to set the count
    this.refreshCartCount();
  }

  public refreshCartCount() {
    // Check if token exists before trying to fetch cart
    const token = localStorage.getItem('accessToken');
    if (!token) {
      this.cartCountSubject.next(0);
      return;
    }

    this.getCartSummary().subscribe({
      next: (res) => {
        console.log('Cart summary response:', res);
        const count = res.data?.items?.reduce((sum: number, item: any) => sum + item.quantity, 0) || 0;
        console.log('Calculated cart count:', count);
        this.cartCountSubject.next(count);
      },
      error: (err) => {
        console.error('Error fetching cart summary:', err);
        this.cartCountSubject.next(0);
      }
    });
  }

  getCartSummary(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/summary`);
  }

  addToCart(productId: string, quantity: number, variantOption?: string): Observable<any> {
    const payload = { productId, quantity, variantOption };
    return this.http.post<any>(`${this.apiUrl}/add`, payload).pipe(
      tap(() => this.refreshCartCount())
    );
  }

  updateCartItem(itemId: string, quantity: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/item/${itemId}`, { quantity }).pipe(
      tap(() => this.refreshCartCount())
    );
  }

  removeFromCart(itemId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/item/${itemId}`).pipe(
      tap(() => this.refreshCartCount())
    );
  }

  clearCart(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/clear`).pipe(
      tap(() => this.refreshCartCount())
    );
  }

  applyCoupon(couponCode: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/apply-coupon`, { couponCode }).pipe(
      tap(() => this.refreshCartCount())
    );
  }

  removeCoupon(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/remove-coupon`).pipe(
      tap(() => this.refreshCartCount())
    );
  }
}
