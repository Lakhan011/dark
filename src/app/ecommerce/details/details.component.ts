import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbNavModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService, Product } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbNavModule, NgbRatingModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product: Product | null = null;
  loading = true;
  activeTab = 1;
  mainImageUrl: string = '';

  quantity = 1;
  addingToCart = false;
  addError = '';
  addSuccess = '';

  reviews: any[] = [];
  newReview = {
    rating: 5,
    title: '',
    comment: ''
  };
  submittingReview = false;
  reviewError = '';
  reviewSuccess = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadProduct(id);
      }
    });
  }

  // ... (existing loadProduct, etc.)

  increaseQuantity() {
    if (this.product && this.product.stockQuantity !== undefined && this.quantity < this.product.stockQuantity) {
      this.quantity++;
    } else if (!this.product?.stockQuantity) {
      this.quantity++;
    }
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    if (!this.product) return;

    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/authentication/login']);
      return;
    }

    if (this.product.stockQuantity !== undefined && this.product.stockQuantity <= 0) {
      this.addError = 'Product is out of stock';
      return;
    }

    this.addingToCart = true;
    this.addError = '';
    this.addSuccess = '';

    const productId = this.product._id || this.product['id'];

    this.cartService.addToCart(productId, this.quantity).subscribe({
      next: (res) => {
        this.addingToCart = false;
        this.addSuccess = 'Added to cart successfully!';
        setTimeout(() => this.addSuccess = '', 3000);
      },
      error: (err) => {
        this.addingToCart = false;
        this.addError = err.error?.message || 'Failed to add to cart';
      }
    });
  }

  buyNow() {
    if (!this.product) return;

    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/authentication/login']);
      return;
    }

    if (this.product.stockQuantity !== undefined && this.product.stockQuantity <= 0) {
      this.addError = 'Product is out of stock';
      return;
    }

    this.addingToCart = true;
    const productId = this.product._id || this.product['id'];
    this.cartService.addToCart(productId, this.quantity).subscribe({
      next: (res) => {
        this.addingToCart = false;
        this.router.navigate(['/ecom/checkout']);
      },
      error: (err) => {
        this.addingToCart = false;
        this.addError = err.error?.message || 'Failed to initiate buy now';
      }
    });
  }

  loadProduct(id: string) {
    this.loading = true;
    this.productService.getProductById(id).subscribe({
      next: (res) => {
        this.product = res.data.product;
        if (this.product?.thumbnail) {
          this.mainImageUrl = this.getImageUrl(this.product.thumbnail);
        } else if (this.product?.images && this.product.images.length > 0) {
          this.mainImageUrl = this.getImageUrl(this.product.images[0]);
        } else {
          this.mainImageUrl = 'assets/images/placeholder.jpg';
        }
        this.loadReviews(id);
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to fetch product', err);
        this.loading = false;
      }
    });
  }

  loadReviews(productId: string) {
    this.productService.getProductReviews(productId).subscribe({
      next: (res) => {
        this.reviews = res.data || [];
      },
      error: (err) => console.error('Failed to load reviews', err)
    });
  }

  onSubmitReview() {
    if (!this.product) return;
    if (!this.newReview.title || !this.newReview.comment) {
      this.reviewError = 'Please fill out all fields.';
      return;
    }

    this.submittingReview = true;
    this.reviewError = '';
    this.reviewSuccess = '';

    this.productService.addReview(this.product._id, this.newReview).subscribe({
      next: (res) => {
        this.submittingReview = false;
        this.reviewSuccess = 'Review submitted successfully!';
        this.newReview = { rating: 5, title: '', comment: '' };
        this.loadReviews(this.product!._id); // Reload reviews
      },
      error: (err) => {
        this.submittingReview = false;
        this.reviewError = err.error?.message || 'Failed to submit review. Make sure you are logged in.';
      }
    });
  }

  setMainImage(url: string) {
    this.mainImageUrl = this.getImageUrl(url);
  }

  getImageUrl(url: string | undefined): string {
    if (!url) return 'assets/images/placeholder.jpg';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api/v1', '')}${url}`;
  }

  getVolumetricWeight(): string {
    if (this.product?.price) {
      return `${Math.floor(this.product.price / 2)} gm`;
    }
    return '180 gm';
  }

  getDimensions(): string {
    return '16.00 L x 8.00 W x 5.00 H cm';
  }

  getWeight(): string {
    return '124.20 gm';
  }
}
