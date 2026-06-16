import { Component, OnInit } from '@angular/core';
import { Job } from '../job-type';
import { ServicejobService } from '../servicejob.service';

import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NgbModal, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';

export class Item {
  name: string = '';
  value: string = '';
}

export const ITEMS: Item[] = [
  {
    name: 'All',
    value: 'all',
  },
  {
    name: 'Part Time',
    value: 'Part time',
  },
  {
    name: 'Full Time',
    value: 'Full time',
  },
  {
    name: 'Internship',
    value: 'Internship',
  },
];

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgScrollbarModule,
    NgbPagination,
  ],
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
})
export class JobsListComponent implements OnInit {
  public showSidebar = false;
  mobileSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  jobs: Job[];
  filjobs: Job[];

  _searchTerm = '';
  _locationsearch = '';

  page = 1;
  pageSize = 4;

  itemsList: Item[] = ITEMS;
  radioSelected: string = '';

  jobAdd: UntypedFormGroup;
  selectedImage: any = 'assets/images/job/noimage.png';

  jobtype: any = ['Full time', 'Part time', 'Internship'];
  location: string[] = [
    'Netherlands',
    'Salt Lake City',
    'San Diego',
    'Minneapolis',
    'Banglore',
    'New Jerssy',
  ];
  jobin: string[] = [
    'Designer',
    'Marketing',
    'Business',
    'React',
    'java',
    'Angular',
  ];

  constructor(
    public service: ServicejobService,
    public fb: UntypedFormBuilder,
    private modalService: NgbModal
  ) {
    this.jobs = service.getJobs();
    this.filjobs = this.jobs;
    //
    this.itemsList = ITEMS;
    this.radioSelected = 'all';

    this.jobAdd = this.fb.group({
      Title: ['', Validators.required],
      Location: ['', Validators.required],
      Description: ['', Validators.required],
      Qualification: ['', Validators.required],
      Icon: ['', Validators.required],
      JobType: ['', Validators.required],
      Nature: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.selectedImage = 'assets/images/job/noimage.png';
  }

  // ============================================================================
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(val: string) {
    this.radioSelected = 'all';
    this._searchTerm = val;
    this.filjobs = this.filter(val);
  }
  filter(v: string) {
    return this.jobs.filter(
      (x) => x.title.toLowerCase().indexOf(v.toLowerCase()) !== -1
    );
  }

  // ==============================================================================

  get locationsearch(): string {
    return this._locationsearch;
  }
  set locationsearch(val: string) {
    this.radioSelected = 'all';
    this._locationsearch = val;
    this.filjobs = this.filterLoc(val);
  }

  filterLoc(v: string) {
    return this.jobs.filter(
      (x) => x.location.toLowerCase().indexOf(v.toLowerCase()) !== -1
    );
  }

  // ===========================================================================================

  onItemChange(item: any) {
    debugger;
    if (item.value === 'all') {
      this.filjobs = this.jobs;
    } else {
      this.filjobs = this.jobs.filter((x) => x.jobType === item.value);
    }
  }

  //==========================================================================================

  openModal(targetModal: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
    });
  }

  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }

  onSubmit() {
    debugger;
    let j = new Job();

    j.id =
      Math.max.apply(
        Math,
        this.service.getJobs().map(function (o) {
          return o.id;
        })
      ) + 1;
    j.title = this.jobAdd?.get('Title')?.value;
    j.location = this.jobAdd?.get('Location')?.value;
    j.description = this.jobAdd?.get('Description')?.value;
    j.qualification = this.jobAdd?.get('Qualification')?.value;
    j.image = this.selectedImage;
    j.jobType = this.jobAdd?.get('JobType')?.value;
    j.icon = this.jobAdd?.get('Icon')?.value;
    j.jobNature = this.jobAdd?.get('Nature')?.value;

    this.jobs?.splice(0, 0, j);
    this.modalService.dismissAll();
    this.ngOnInit();
  }

  preview(files: any) {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.selectedImage = reader.result;
    };
  }
}
