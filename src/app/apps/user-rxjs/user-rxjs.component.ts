import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { User } from './user';
import { UserRxjsServiceService } from './user-rxjs-service.service';
import Validation from '../../form/form-validation/validation';
import { FeatherModule } from 'angular-feather';

@Component({
  selector: 'app-user-rxjs',
  standalone: true,
  imports: [
    CommonModule,
    FeatherModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
  ],
  templateUrl: './user-rxjs.component.html',
  providers: [DatePipe]
})
export class UserRxjsComponent implements OnInit {
  // 2
  form: FormGroup = new FormGroup({
    Name: new FormControl(''),
    Position: new FormControl(''),
    Email: new FormControl(''),
    Mobile: new FormControl(''),
    DateOfJoining: new FormControl(''),
    Salary: new FormControl(''),
    Projects: new FormControl(''),
  });
  submitted = false;

  userList: User[] = [];
  filterArray: User[] = [];
  userDetail: User | null = null;

  config: any;
  editUser: UntypedFormGroup | any;

  joiningDate: string | null = null;

  page = 1;
  pageSize = 7;

  _searchTerm = '';

  constructor(
    private userService: UserRxjsServiceService,
    private fb: UntypedFormBuilder,
    private modalService: NgbModal,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder
  ) {
    this.userService.getUsers().subscribe((data) => {
      this.userList.push(data);
    });
    this.filterArray = this.userList;
  }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        Name: ['', Validators.required],
        Position: ['', Validators.required],
        DateOfJoining: ['', Validators.required],
        Salary: ['', Validators.required],
        Projects: ['', Validators.required],
        Mobile: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
        Email: ['', [Validators.required, Validators.email]],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );

    this.editUser = this.fb.group({
      id: [''],
      Name: ['', Validators.required],
      Position: ['', Validators.required],
      Email: ['', Validators.required],
      Mobile: ['', Validators.required],
      DateOfJoining: ['', Validators.required],
      Salary: ['', Validators.required],
      Projects: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  //search...
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(val: string) {
    this._searchTerm = val;
    this.filterArray = this.filter(val);
  }

  filter(v: string) {
    return this.userList.filter(
      (x) =>
        x.Name.toLowerCase().indexOf(v.toLowerCase()) !== -1 ||
        x.Email.toLowerCase().indexOf(v.toLowerCase()) !== -1
    );
  }

  // delete user...
  deleteUser(id: number): void {
    if (this.filterArray) {
      this.filterArray = this.filterArray.filter((user) => user.id !== id);
      this.userService.deleteUser(id);
    }
  }

  // open model...
  openModal(editUserModal: any, user: User | null) {
    this.modalService.open(editUserModal, {
      centered: true,
      backdrop: 'static',
    });

    if (user != null) {
      if (user.DateOfJoining) {
        this.joiningDate = this.datePipe.transform(
          new Date(user.DateOfJoining),
          'yyyy-MM-dd'
        );
      }
      this.userDetail = user;
      this.editUser?.patchValue({
        Name: user.Name,
        Position: user.Position,
        Email: user.Email,
        Mobile: user.Mobile,
        DateOfJoining: user.DateOfJoining,
        Salary: user.Salary,
        Projects: user.Projects,
      });
    }
  }

  // on submit data rom model...
  onSubmit() {
    //this.submitted = true;

    if (this.filterArray != null && this.userDetail) {
      const index = this.filterArray.indexOf(this.userDetail);

      if (this.editUser != null) {
        this.userDetail.Name = this.editUser.get('Name')?.value;
        this.userDetail.Position = this.editUser.get('Position')?.value;
        this.userDetail.Email = this.editUser.get('Email')?.value;
        this.userDetail.Mobile = this.editUser.get('Mobile')?.value;
        this.userDetail.DateOfJoining =
          this.editUser.get('DateOfJoining')?.value;
        this.userDetail.Salary = this.editUser.get('Salary')?.value;
        this.userDetail.Projects = this.editUser.get('Projects')?.value;
      }

      this.filterArray[index] = this.userDetail;
      this.userService.updateUser(index, this.userDetail);
    } else {
      this.userDetail = new User();

      if (this.filterArray)
        this.userDetail.id =
          Math.max.apply(
            Math,
            this.filterArray.map(function (o) {
              return o.id;
            })
          ) + 1;

      this.userDetail.Name = this.editUser?.get('Name')?.value;
      this.userDetail.Position = this.editUser?.get('Position')?.value;
      this.userDetail.Email = this.editUser?.get('Email')?.value;
      this.userDetail.Mobile = this.editUser?.get('Mobile')?.value;
      this.userDetail.DateOfJoining = new Date();
      this.userDetail.Salary = this.editUser?.get('Salary')?.value;
      this.userDetail.Projects = this.editUser?.get('Projects')?.value;
      this.userDetail.imagePath = 'assets/images/users/user3.jpg';

      this.userService.addUser(this.userDetail);
      this.filterArray.splice(0, 0, this.userDetail);
    }
    this.modalService.dismissAll();
    this.userDetail = null;

    this.joiningDate = '';
    this.ngOnInit();
  }

  // close model...
  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }
}
