import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService, Product } from '../../../core/services/product.service';
import { CategoryService, Category, Subcategory } from '../../../core/services/category.service';
import { FeatherModule } from 'angular-feather';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule, FeatherModule],
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  @Input() product?: Product;
  productForm!: FormGroup;
  categories: Category[] = [];
  subcategories: Subcategory[] = [];
  
  newImages: File[] = [];
  existingImages: string[] = [];
  
  isSubmitting = false;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.initForm();
    this.loadCategories();
    
    if (this.product) {
      let categoryId = this.product.categoryId;
      if (typeof this.product.categoryId === 'object') {
        categoryId = this.product.categoryId['_id'];
      }
      
      let subcategoryId = this.product.subcategoryId;
      if (typeof this.product.subcategoryId === 'object') {
        subcategoryId = this.product.subcategoryId?.['_id'];
      }

      this.productForm.patchValue({
        productName: this.product.productName,
        categoryId: categoryId,
        subcategoryId: subcategoryId,
        brand: this.product.brand,
        price: this.product.price,
        discountPrice: this.product.discountPrice,
        status: this.product.status,
        recommended: this.product.recommended,
        shortDescription: this.product.shortDescription
      });
      
      this.existingImages = this.product.images || [];
    }
  }

  initForm() {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      categoryId: ['', Validators.required],
      subcategoryId: [''],
      brand: [''],
      price: ['', [Validators.required, Validators.min(0)]],
      discountPrice: [''],
      status: ['ACTIVE'],
      recommended: [false],
      shortDescription: ['']
    });
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe(res => {
      this.categories = res.data;
      if (this.product && this.product.categoryId) {
        this.onCategoryChange(this.product.subcategoryId?.['_id'] || this.product.subcategoryId);
      }
    });
  }

  onCategoryChange(subcategoryIdToSelect?: string) {
    const catId = this.productForm.value.categoryId;
    this.subcategories = [];
    if (!subcategoryIdToSelect) {
      this.productForm.patchValue({ subcategoryId: '' });
    }
    
    if (catId) {
      this.categoryService.getSubcategoriesByCategory(catId).subscribe(res => {
        this.subcategories = res.data;
        if (subcategoryIdToSelect) {
          this.productForm.patchValue({ subcategoryId: subcategoryIdToSelect });
        }
      });
    }
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.newImages = Array.from(event.target.files);
    }
  }

  removeExistingImage(index: number) {
    this.existingImages.splice(index, 1);
  }

  getImageUrl(url: string) {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl.replace('/api/v1', '')}${url}`;
  }

  onSubmit() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const formData = new FormData();
    const formValue = this.productForm.value;

    Object.keys(formValue).forEach(key => {
      if (formValue[key] !== null && formValue[key] !== '') {
        formData.append(key, formValue[key]);
      }
    });

    if (this.existingImages.length === 0) {
      formData.append('existingImages', '');
    } else {
      this.existingImages.forEach(img => {
        formData.append('existingImages', img);
      });
    }

    this.newImages.forEach(file => {
      formData.append('images', file);
    });

    if (this.product && (this.product._id || this.product['id'])) {
      this.productService.updateProduct(this.product['_id']!, formData).subscribe({
        next: (res) => {
          this.isSubmitting = false;
          this.activeModal.close(res.data);
        },
        error: () => {
          this.isSubmitting = false;
        }
      });
    } else {
      this.productService.createProduct(formData).subscribe({
        next: (res) => {
          this.isSubmitting = false;
          this.activeModal.close(res.data);
        },
        error: () => {
          this.isSubmitting = false;
        }
      });
    }
  }
}
