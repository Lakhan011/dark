import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export interface Product {
  _id?: string;
  productName: string;
  categoryId: any;
  subcategoryId?: any;
  brand?: string;
  price: number;
  discountPrice?: number;
  offerPrice?: number;
  taxPercentage?: number;
  shortDescription?: string;
  longDescription?: string;
  colors?: { name: string; hexCode: string }[];
  sizes?: string[];
  stockQuantity?: number;
  warranty?: string;
  returnPolicy?: string;
  ratings?: {
    average: number;
    count: number;
  };
  shippingInfo?: {
    isFreeShipping: boolean;
    shippingCharge: number;
    estimatedDays: number;
  };
  recommended?: boolean;
  status?: string;
  sellerId?: any;
  thumbnail?: string;
  images?: string[];
  createdAt?: string;
  updatedAt?: string;
  isExpanded?: boolean;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  getProducts(filters: any, page: number = 1, limit: number = 10): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    Object.keys(filters).forEach(key => {
      if (filters[key] !== null && filters[key] !== undefined && filters[key] !== '') {
        params = params.set(key, filters[key]);
      }
    });

    return this.http.get<any>(this.apiUrl, { params });
  }

  getProductBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${slug}`);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/id/${id}`);
  }

  getProductReviews(productId: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/reviews/product/${productId}`);
  }

  addReview(productId: string, data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/reviews/product/${productId}`, data);
  }

  createProduct(data: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateProduct(id: string, data: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
