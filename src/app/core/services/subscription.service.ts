import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  subscribeToPlan(planId: string, planName: string): Observable<any> {
    console.log(" planId -> ", planId, " plan name -> ", planName );
    console.log(" route -> ", `${this.apiUrl}/seller/subscribe` );
    return this.http.post(`${this.apiUrl}/seller/subscribe`, { planId, planName });
  }
}
