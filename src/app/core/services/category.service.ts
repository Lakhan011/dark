import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Category {
  _id: string;
  name: string;
  description?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  _id: string;
  categoryId: string | Category;
  name: string;
  description?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = `${environment.apiUrl}/categories`;

  constructor(private http: HttpClient) {}

  // --- Category Endpoints ---

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getCategoryWithSubcategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/with-subcategories`);
  }

  getCategoryBySlug(slug: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${slug}`);
  }

  createCategory(data: Partial<Category>): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }

  updateCategory(id: string, data: Partial<Category>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // --- Subcategory Endpoints ---

  getAllSubcategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/subcategory`);
  }

  getSubcategoriesByCategory(categoryId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/subcategory/${categoryId}`);
  }

  createSubcategory(data: Partial<Subcategory>): Observable<any> {
    return this.http.post(`${this.apiUrl}/subcategory`, data);
  }

  updateSubcategory(id: string, data: Partial<Subcategory>): Observable<any> {
    return this.http.put(`${this.apiUrl}/subcategory/${id}`, data);
  }

  deleteSubcategory(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/subcategory/${id}`);
  }
}
