import {
  Component,
  OnInit,
  Directive,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TableService } from './ngtable.service';
import Validation from '../../form/form-validation/validation';
import {
  FormBuilder,
  FormsModule,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import {
  ModalDismissReasons,
  NgbModal,
  NgbModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { Table } from './ngtable';
import {
  AsyncPipe,
  CommonModule,
  DecimalPipe,
} from '@angular/common';
import { FeatherModule } from 'angular-feather';

export type SortColumn = keyof Table | '';

export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = {
  asc: 'desc',
  desc: '',
  '': 'asc',
};
export const compare = (v1: number, v2: number) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: string | null;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  standalone: true,
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})

export class NgbdSortableHeader {
  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}

@Component({
  selector: 'app-ngtable',
  standalone: true,
  imports: [
    DecimalPipe,
    FormsModule,
    AsyncPipe,
    NgbTypeaheadModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    CommonModule,
    FeatherModule,
    NgbModule,
    NgbdSortableHeader
  ],
  templateUrl: './ngtable.component.html',
  styleUrls: ['./ngtable.component.scss'],
  providers: [TableService]
})
export class TableComponent implements OnInit {
  // 2
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  clientList = this.tableService.getTable();
  sortClientList: Table[] | null = null;
  filterClient: Table[] | null = null;
  cfilterClient: Table[] | null = null;
  page = 1;
  pageSize = 2;
  editClient: UntypedFormGroup = Object.create(null);
  editAddLabel: string = 'Edit';
  clientDetail: Table | null = null;
  totalLengthOfCollection: number = 0;

  //Sorting purpose...
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    private tableService: TableService,
    private fb: UntypedFormBuilder,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {
    this.filterClient = this.clientList;
    this.cfilterClient = this.clientList;
    this.sortClientList = this.clientList;
    this.totalLengthOfCollection = this.cfilterClient.length;
  }

  ngOnInit() {
    this.editClient = this.fb.group({
      fullName: ['', Validators.required],
      UserName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
    });

    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.sortClientList = this.tableService.getTable();
      this.cfilterClient = this.tableService.getTable();
    } else {
    }
  }
  // // //}

  //Searching..........
  _searchTerm: string = '';
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(val: string) {
    this._searchTerm = val;
    this.filterClient = this.filter(val);
  }

  filter(v: string) {
    return this.tableService
      .getTable()
      .filter(
        (x) =>
          x.Name?.toLowerCase().indexOf(v.toLowerCase()) !== -1 ||
          x.UserName?.toLowerCase().indexOf(v.toLowerCase()) !== -1 ||
          x.Email?.toLowerCase().indexOf(v.toLowerCase()) !== -1
      );
  }

  //complete example................
  cpage = 1;
  cpageSize = 4;

  _csearchTerm: string = '';
  get csearchTerm(): string {
    return this._csearchTerm;
  }
  set csearchTerm(val: string) {
    this._csearchTerm = val;
    this.cfilterClient = this.cfilter(val);
    this.totalLengthOfCollection = this.cfilterClient.length;
  }

  cfilter(v: string) {
    return this.tableService
      .getTable()
      .filter(
        (x) =>
          x.Name?.toLowerCase().indexOf(v.toLowerCase()) !== -1 ||
          x.UserName?.toLowerCase().indexOf(v.toLowerCase()) !== -1 ||
          x.Email?.toLowerCase().indexOf(v.toLowerCase()) !== -1
      );
  }

  //Model........................
  logValidationErrors(group: UntypedFormGroup) {
    // Object.keys(group.controls).forEach((key: string) => {
    //   const ac = group.get(key);
    //   this.formsErrors[key] = '';
    //   if (ac && !ac.valid && (ac.touched || ac.dirty)) {
    //     const message = this.ValidationMessage[key];
    //     for (const errorKey in ac.errors) {
    //       if (errorKey) {
    //         this.formsErrors[key] += message[errorKey] + '    ';
    //       }
    //     }
    //   }
    //   if (ac instanceof FormGroup) {
    //     this.logValidationErrors(ac)
    //   }
    // })
  }

  ValidationMessage = {
    fullName: { required: 'full Name is required.' },
    UserName: { required: 'User Name is required.' },
    email: {
      required: 'Email is required.',
      Email: 'Not a email',
    },
  };

  formsErrors = {};

  openModal(targetModal: NgbModal, client: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
    });

    if (client == null) {
      this.editAddLabel = 'Add';
    }

    if (client != null) {
      this.clientDetail = client;
      this.editAddLabel = 'Edit';
      this.editClient.patchValue({
        fullName: client.Name,
        UserName: client.UserName,
        email: client.Email,
      });
    }
  }

  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }

  delete(id: number): void {
    this.cfilterClient = this.cfilterClient!.filter(
      (client) => client.Id !== id
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));

    if (this.clientDetail != null) {
      const index = this.tableService.getTable().indexOf(this.clientDetail);

      this.clientDetail.Name = this.editClient?.get('fullName')?.value;
      this.clientDetail.UserName = this.editClient?.get('UserName')?.value;
      this.clientDetail.Email = this.editClient?.get('email')?.value;

      this.tableService.getTable()[index] = this.clientDetail;
    } else {
      this.clientDetail = new Table();

      this.clientDetail.Id =
        Math.max.apply(
          Math,
          this.tableService.getTable().map(function (o) {
            return o.Id;
          })
        ) + 1;

      this.clientDetail.Name = this.editClient?.get('fullName')?.value;
      this.clientDetail.UserName = this.editClient?.get('UserName')?.value;
      this.clientDetail.Email = this.editClient?.get('email')?.value;
      this.clientDetail.imagePath = 'assets/image/user3.jpg';

      this.tableService.getTable().push(this.clientDetail);
    }
    this.modalService.dismissAll();
    this.clientDetail = null;
    this.ngOnInit();
  }
}
