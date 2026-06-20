import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService, CartSummary, CartItem } from '../../core/services/cart.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartSummary: CartSummary | null = null;
  loading = true;
  updatingId: string | null = null;
  couponCodeInput = '';
  couponError = '';
  couponSuccess = '';
  applyingCoupon = false;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.loading = true;
    this.cartService.getCartSummary().subscribe({
      next: (res) => {
        this.cartSummary = res.data;
        if (this.cartSummary?.couponCode) {
          this.couponCodeInput = this.cartSummary.couponCode;
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load cart', err);
        this.loading = false;
      }
    });
  }

  increaseQuantity(item: CartItem) {
    // Optimistic UI could be implemented, but let's be safe and call API
    this.updateQuantity(item._id, item.quantity + 1);
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      this.updateQuantity(item._id, item.quantity - 1);
    }
  }

  updateQuantity(itemId: string, quantity: number) {
    this.updatingId = itemId;
    this.cartService.updateCartItem(itemId, quantity).subscribe({
      next: (res) => {
        this.cartSummary = res.data;
        this.updatingId = null;
      },
      error: (err) => {
        this.updatingId = null;
        alert(err.error?.message || 'Failed to update quantity');
      }
    });
  }

  removeItem(itemId: string) {
    this.updatingId = itemId;
    this.cartService.removeFromCart(itemId).subscribe({
      next: (res) => {
        this.cartSummary = res.data;
        this.updatingId = null;
      },
      error: (err) => {
        this.updatingId = null;
        alert(err.error?.message || 'Failed to remove item');
      }
    });
  }

  clearCart() {
    if (!confirm('Are you sure you want to clear your cart?')) return;
    
    this.loading = true;
    this.cartService.clearCart().subscribe({
      next: (res) => {
        this.cartSummary = res.data;
        this.couponCodeInput = '';
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        alert('Failed to clear cart');
      }
    });
  }

  applyCoupon() {
    if (!this.couponCodeInput.trim()) return;
    
    this.applyingCoupon = true;
    this.couponError = '';
    this.couponSuccess = '';

    this.cartService.applyCoupon(this.couponCodeInput).subscribe({
      next: (res) => {
        this.cartSummary = res.data;
        this.applyingCoupon = false;
        this.couponSuccess = 'Coupon applied successfully!';
      },
      error: (err) => {
        this.applyingCoupon = false;
        this.couponError = err.error?.message || 'Failed to apply coupon';
      }
    });
  }

  removeCoupon() {
    this.applyingCoupon = true;
    this.cartService.removeCoupon().subscribe({
      next: (res) => {
        this.cartSummary = res.data;
        this.couponCodeInput = '';
        this.couponSuccess = '';
        this.couponError = '';
        this.applyingCoupon = false;
      },
      error: (err) => {
        this.applyingCoupon = false;
        alert('Failed to remove coupon');
      }
    });
  }

  getImageUrl(url: string | undefined): string {
    if (!url) return 'assets/images/placeholder.jpg';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api/v1', '')}${url}`;
  }
}
