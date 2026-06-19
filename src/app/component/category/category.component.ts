import { Component, OnInit, HostListener, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbPaginationModule, NgbTooltipModule, NgbDropdownModule, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { FeatherModule } from 'angular-feather';
import { CategoryService, Category } from '../../core/services/category.service';
import { HasPermissionDirective } from '../../core/directives/has-permission.directive';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    FeatherModule,
    HasPermissionDirective,
    NgbTooltipModule,
    NgbDropdownModule
  ],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  filterArray: Category[] = [];
  loading = false;

  page = 1;
  pageSize = 10;
  _searchTerm = '';

  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(val: string) {
    this._searchTerm = val;
    this.filterArray = this.categories.filter(
      c => c.name.toLowerCase().includes(val.toLowerCase()) || 
           c.description?.toLowerCase().includes(val.toLowerCase())
    );
  }

  categoryForm!: FormGroup;
  subcategoryForm!: FormGroup;
  submitted = false;
  subSubmitted = false;
  editingCategory: Category | null = null;
  categoryToDelete: Category | null = null;
  addingSubcategoryTo: Category | null = null;
  editingSubcategory: any | null = null;
  subcategoryToDelete: any | null = null;

  @ViewChildren(NgbDropdown) dropdowns!: QueryList<NgbDropdown>;

  @HostListener('document:mousedown', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    // If we click outside both the toggle button and the dropdown menu, close all dropdowns
    if (!target.closest('.dropdown-toggle') && !target.closest('.dropdown-menu')) {
      if (this.dropdowns) {
        this.dropdowns.forEach(drop => drop.close());
      }
    }
  }

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadCategories();
  }

  initForm(): void {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      status: ['ACTIVE', Validators.required]
    });
    this.subcategoryForm = this.fb.group({
      categoryId: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
      status: ['ACTIVE', Validators.required]
    });
  }

  getSubcategoryPreview(category: Category): string {
    if (!category.subcategories || category.subcategories.length === 0) {
      return 'No subcategories available.';
    }
    const maxItems = 8;
    const items = category.subcategories.slice(0, maxItems).map(sub => `${sub.name} (${sub.status})`);
    
    let preview = items.join('\n');
    if (category.subcategories.length > maxItems) {
      preview += `\n+ ${category.subcategories.length - maxItems} More`;
    }
    return preview;
  }

  get f() { return this.categoryForm.controls; }
  get subF() { return this.subcategoryForm.controls; }

  loadCategories(): void {
    this.loading = true;
    this.categoryService.getCategoryWithSubcategories().subscribe({
      next: (res) => {
        this.categories = res.data || [];
        this.filterArray = [...this.categories];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading categories', err);
        this.loading = false;
      }
    });
  }


  openModal(content: any, category: Category | null = null): void {
    this.submitted = false;
    this.editingCategory = category;
    
    if (category) {
      this.categoryForm.patchValue({
        name: category.name,
        description: category.description,
        status: category.status
      });
    } else {
      this.categoryForm.reset({ status: 'ACTIVE' });
    }

    this.modalService.open(content, { centered: true });
  }

  saveCategory(): void {
    this.submitted = true;
    if (this.categoryForm.invalid) {
      return;
    }

    const val = this.categoryForm.value;
    if (this.editingCategory && this.editingCategory._id) {
      this.categoryService.updateCategory(this.editingCategory._id, val).subscribe({
        next: () => {
          this.loadCategories();
          this.modalService.dismissAll();
        },
        error: (err) => console.error(err)
      });
    } else {
      this.categoryService.createCategory(val).subscribe({
        next: () => {
          this.loadCategories();
          this.modalService.dismissAll();
        },
        error: (err) => console.error(err)
      });
    }
  }

  confirmDelete(content: any, category: Category): void {
    this.categoryToDelete = category;
    this.modalService.open(content, { centered: true });
  }

  deleteCategory(): void {
    if (this.categoryToDelete && this.categoryToDelete._id) {
      this.categoryService.deleteCategory(this.categoryToDelete._id).subscribe({
        next: () => {
          this.loadCategories();
          this.modalService.dismissAll();
        },
        error: (err) => console.error(err)
      });
    }
  }

  openSubcategoryModal(content: any, category: Category, subcategory: any = null): void {
    this.subSubmitted = false;
    this.addingSubcategoryTo = category;
    this.editingSubcategory = subcategory;
    
    if (subcategory) {
      this.subcategoryForm.patchValue({
        categoryId: category._id,
        name: subcategory.name,
        description: subcategory.description,
        status: subcategory.status
      });
    } else {
      this.subcategoryForm.reset({
        categoryId: category._id,
        status: 'ACTIVE'
      });
    }
    this.modalService.open(content, { centered: true });
  }

  saveSubcategory(): void {
    this.subSubmitted = true;
    if (this.subcategoryForm.invalid) {
      return;
    }

    const val = this.subcategoryForm.value;
    if (this.editingSubcategory && this.editingSubcategory._id) {
      this.categoryService.updateSubcategory(this.editingSubcategory._id, val).subscribe({
        next: () => {
          this.loadCategories();
          this.modalService.dismissAll();
        },
        error: (err) => console.error(err)
      });
    } else {
      this.categoryService.createSubcategory(val).subscribe({
        next: () => {
          this.loadCategories();
          this.modalService.dismissAll();
        },
        error: (err) => console.error(err)
      });
    }
  }

  confirmDeleteSubcategory(content: any, subcategory: any): void {
    this.subcategoryToDelete = subcategory;
    this.modalService.open(content, { centered: true });
  }

  deleteSubcategory(): void {
    if (this.subcategoryToDelete && this.subcategoryToDelete._id) {
      this.categoryService.deleteSubcategory(this.subcategoryToDelete._id).subscribe({
        next: () => {
          this.loadCategories();
          this.modalService.dismissAll();
        },
        error: (err) => console.error(err)
      });
    }
  }
}
