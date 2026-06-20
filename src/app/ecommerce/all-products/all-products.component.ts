import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService, Product } from '../../core/services/product.service';
import { CategoryService, Category, Subcategory } from '../../core/services/category.service';
import { FeatherModule } from 'angular-feather';
import { environment } from '../../../environments/environment';
import { RouterModule, Router } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule, FeatherModule, RouterModule],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  subcategories: Subcategory[] = [];

  page = 1;
  limit = 12;
  hasMore = true;
  loading = false;
  
  addingToCartId: string | null = null;
  addError: string = '';

  filters = {
    productName: '',
    categoryId: '',
    subcategoryId: '',
    status: 'ACTIVE'
  };

  private scrollDistance = 200; // px from bottom to trigger load

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.loadProducts(true);
  }

  addToCart(product: Product) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/authentication/login']);
      return;
    }

    if (product.stockQuantity !== undefined && product.stockQuantity <= 0) {
      this.addError = 'Product is out of stock';
      return;
    }

    const productId = product._id || product['id'];
    this.addingToCartId = productId;
    this.addError = '';
    
    this.cartService.addToCart(productId, 1).subscribe({
      next: (res) => {
        this.addingToCartId = null;
      },
      error: (err) => {
        this.addingToCartId = null;
        this.addError = err.error?.message || 'Failed to add to cart';
        alert(this.addError);
      }
    });
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
    this.loadProducts(true);
  }

  onSearch(event: any) {
    this.filters.productName = event.target.value;
    this.loadProducts(true);
  }

  resetFilters() {
    this.filters = {
      productName: '',
      categoryId: '',
      subcategoryId: '',
      status: 'ACTIVE'
    };
    this.subcategories = [];
    this.loadProducts(true);
  }

  loadProducts(reset = false) {
    if (this.loading) return;
    
    if (reset) {
      this.page = 1;
      this.products = [];
      this.hasMore = true;
    }

    if (!this.hasMore) return;

    this.loading = true;

    // Filter out 'ALL' status or empty strings to keep request clean
    const activeFilters: any = {};
    if (this.filters.productName) activeFilters.productName = this.filters.productName;
    if (this.filters.categoryId) activeFilters.categoryId = this.filters.categoryId;
    if (this.filters.subcategoryId) activeFilters.subcategoryId = this.filters.subcategoryId;
    if (this.filters.status !== 'ALL') activeFilters.status = this.filters.status;

    this.productService.getProducts(activeFilters, this.page, this.limit).subscribe({
      next: (res) => {
        const newProducts = res.data.products || res.data; // Depending on pagination structure
        
        // Handling both paginated and non-paginated responses
        const items = Array.isArray(newProducts) ? newProducts : [];
        
        this.products = [...this.products, ...items];
        
        // If we received fewer items than the limit, we've hit the end
        if (items.length < this.limit) {
          this.hasMore = false;
        } else {
          this.page++;
        }
        
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.loading || !this.hasMore) return;

    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight - this.scrollDistance) {
      this.loadProducts();
    }
  }

  getImageUrl(url: string | undefined): string {
    if (!url) return 'assets/images/placeholder.jpg';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api/v1', '')}${url}`;
  }
}
