import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-apply',
  standalone: true,
  imports:[CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './job-apply.component.html',
})
export class JobApplyComponent implements OnInit {

  applyDetail: UntypedFormGroup;

  constructor(public fb: UntypedFormBuilder) { 

    this.applyDetail = this.fb.group({

      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],

    });


  }

  ngOnInit(): void {
  }


  onSubmit() {
    debugger;
    
  }



}
