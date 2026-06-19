import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService, Product } from '../../core/services/product.service';
import { CategoryService, Category, Subcategory } from '../../core/services/category.service';
import { FeatherModule } from 'angular-feather';
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HasPermissionDirective } from '../../core/directives/has-permission.directive';
import { ProductFormComponent } from './product-form/product-form.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule, NgbPaginationModule, FeatherModule, HasPermissionDirective],
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  subcategories: Subcategory[] = [];
  
  totalRecords = 0;
  page = 1;
  pageSize = 10;
  pageSizes = [10, 25, 50, 100];
  
  filters = {
    productName: '',
    categoryId: '',
    subcategoryId: '',
    brand: '',
    sellerId: '',
    status: 'ACTIVE',
    recommended: '',
    minPrice: '',
    maxPrice: '',
    startDate: '',
    endDate: '',
    sortBy: 'createdAt',
    sortOrder: 'desc'
  };

  searchSubject = new Subject<string>();
  isLoading = false;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private modalService: NgbModal
  ) {
    this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      this.filters.productName = value;
      this.page = 1;
      this.loadProducts();
    });
  }

  ngOnInit() {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe(res => {
      this.categories = res.data;
    });
  }

  onCategoryChange() {
    this.filters.subcategoryId = '';
    this.subcategories = [];
    if (this.filters.categoryId) {
      this.categoryService.getSubcategoriesByCategory(this.filters.categoryId).subscribe(res => {
        this.subcategories = res.data;
      });
    }
    this.page = 1;
    this.loadProducts();
  }

  onSearch(event: any) {
    this.searchSubject.next(event.target.value);
  }

  loadProducts() {
    this.isLoading = true;
    this.productService.getProducts(this.filters, this.page, this.pageSize).subscribe({
      next: (res) => {
        this.products = res.data?.data || res.data || [];
        if (res.meta) {
          this.totalRecords = res.meta.total;
        } else if (res.total) {
          this.totalRecords = res.total;
        } else if (res.data?.total) {
          this.totalRecords = res.data.total;
        } else {
          this.totalRecords = this.products.length;
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  onPageChange(page: number) {
    this.page = page;
    this.loadProducts();
  }

  onPageSizeChange() {
    this.page = 1;
    this.loadProducts();
  }

  sort(column: string) {
    if (this.filters.sortBy === column) {
      this.filters.sortOrder = this.filters.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.filters.sortBy = column;
      this.filters.sortOrder = 'asc';
    }
    this.loadProducts();
  }

  resetFilters() {
    this.filters = {
      productName: '',
      categoryId: '',
      subcategoryId: '',
      brand: '',
      sellerId: '',
      status: 'ACTIVE',
      recommended: '',
      minPrice: '',
      maxPrice: '',
      startDate: '',
      endDate: '',
      sortBy: 'createdAt',
      sortOrder: 'desc'
    };
    this.subcategories = [];
    this.page = 1;
    this.loadProducts();
  }

  getImageUrl(url: string) {
    if (!url) return 'assets/images/users/1.jpg';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api/v1', '')}${url}`;
  }

  openProductForm(product?: Product) {
    const modalRef = this.modalService.open(ProductFormComponent, { size: 'xl', backdrop: 'static' });
    modalRef.componentInstance.product = product;
    modalRef.result.then((result) => {
      if (result) {
        this.loadProducts();
      }
    }).catch(() => {});
  }

  deleteProduct(id: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.loadProducts();
      });
    }
  }
}
