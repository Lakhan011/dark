import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  signupForm: FormGroup;

  showPassword = false;
  showConfirmPassword = false;

  roles = [
    {
      label: 'Online Seller',
      value: 'SELLER'
    },
    {
      label: 'Product Supplier',
      value: 'CUSTOMER'
    }
  ];

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toastr: ToastrService) {

    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });

  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  signUp(): void {

    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    if (
      this.signupForm.value.password !==
      this.signupForm.value.confirmPassword
    ) {
      this.toastr.error('Password and Confirm Password do not match', 'Error');
      return;
    }

    console.log(this.signupForm.value);

    this.authService.register(this.signupForm.value).subscribe({
      next: (res) => {
        this.toastr.success('Registration successful! Please login.', 'Success');
        this.router.navigate(['/authentication/login']);
      },
      error: (err) => {
        this.toastr.error('Registration failed: ' + (err.error?.message || err.message), 'Error');
      }
    });
  }

}