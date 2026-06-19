import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherModule } from 'angular-feather';
import { CategoryService, Category, Subcategory } from '../../core/services/category.service';
import { HasPermissionDirective } from '../../core/directives/has-permission.directive';

@Component({
  selector: 'app-subcategory-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    FeatherModule,
    HasPermissionDirective,
    NgbTooltipModule
  ],
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.scss']
})
export class SubcategoryListComponent implements OnInit {
  subcategories: Subcategory[] = [];
  filterArray: Subcategory[] = [];
  categories: Category[] = [];
  loading = false;

  page = 1;
  pageSize = 10;
  _searchTerm = '';
  _selectedCategoryId = '';

  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(val: string) {
    this._searchTerm = val;
    this.applyFilters();
  }

  get selectedCategoryId(): string {
    return this._selectedCategoryId;
  }
  set selectedCategoryId(val: string) {
    this._selectedCategoryId = val;
    this.applyFilters();
  }

  subcategoryForm!: FormGroup;
  submitted = false;
  editingSubcategory: Subcategory | null = null;
  subcategoryToDelete: Subcategory | null = null;

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadCategories();
    this.loadSubcategories();
  }

  initForm(): void {
    this.subcategoryForm = this.fb.group({
      categoryId: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
      status: ['ACTIVE', Validators.required]
    });
  }

  get f() { return this.subcategoryForm.controls; }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (res) => this.categories = res.data || [],
      error: (err) => console.error(err)
    });
  }

  loadSubcategories(): void {
    this.loading = true;
    this.categoryService.getAllSubcategories().subscribe({
      next: (res) => {
        this.subcategories = res.data || [];
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading subcategories', err);
        this.loading = false;
      }
    });
  }

  applyFilters(): void {
    this.filterArray = this.subcategories.filter(sub => {
      const matchSearch = sub.name.toLowerCase().includes(this._searchTerm.toLowerCase()) || 
                          sub.description?.toLowerCase().includes(this._searchTerm.toLowerCase());
      
      let matchCategory = true;
      if (this._selectedCategoryId) {
        if (typeof sub.categoryId === 'string') {
          matchCategory = sub.categoryId === this._selectedCategoryId;
        } else if (sub.categoryId && typeof sub.categoryId === 'object') {
          matchCategory = sub.categoryId._id === this._selectedCategoryId;
        }
      }
      return matchSearch && matchCategory;
    });
  }

  getParentCategoryName(subcategory: Subcategory): string {
    if (subcategory.categoryId && typeof subcategory.categoryId === 'object') {
      return subcategory.categoryId.name;
    }
    const cat = this.categories.find(c => c._id === subcategory.categoryId);
    return cat ? cat.name : 'Unknown';
  }

  openModal(content: any, subcategory: Subcategory | null = null): void {
    this.submitted = false;
    this.editingSubcategory = subcategory;
    
    if (subcategory) {
      let catId = subcategory.categoryId;
      if (typeof catId === 'object' && catId._id) {
        catId = catId._id;
      }
      this.subcategoryForm.patchValue({
        categoryId: catId,
        name: subcategory.name,
        description: subcategory.description,
        status: subcategory.status
      });
    } else {
      this.subcategoryForm.reset({ status: 'ACTIVE', categoryId: this._selectedCategoryId || '' });
    }

    this.modalService.open(content, { centered: true });
  }

  saveSubcategory(): void {
    this.submitted = true;
    if (this.subcategoryForm.invalid) {
      return;
    }

    const val = this.subcategoryForm.value;
    if (this.editingSubcategory && this.editingSubcategory._id) {
      this.categoryService.updateSubcategory(this.editingSubcategory._id, val).subscribe({
        next: () => {
          this.loadSubcategories();
          this.modalService.dismissAll();
        },
        error: (err) => console.error(err)
      });
    } else {
      this.categoryService.createSubcategory(val).subscribe({
        next: () => {
          this.loadSubcategories();
          this.modalService.dismissAll();
        },
        error: (err) => console.error(err)
      });
    }
  }

  confirmDelete(content: any, subcategory: Subcategory): void {
    this.subcategoryToDelete = subcategory;
    this.modalService.open(content, { centered: true });
  }

  deleteSubcategory(): void {
    if (this.subcategoryToDelete && this.subcategoryToDelete._id) {
      this.categoryService.deleteSubcategory(this.subcategoryToDelete._id).subscribe({
        next: () => {
          this.loadSubcategories();
          this.modalService.dismissAll();
        },
        error: (err) => console.error(err)
      });
    }
  }
}
