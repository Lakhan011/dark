import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  Validators,
  AbstractControl,
  FormBuilder,
  UntypedFormBuilder,
  UntypedFormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { Contact } from './contact';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';

@Component({
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [CommonModule, FeatherModule, FormsModule, ReactiveFormsModule],
})
export class ContactComponent implements OnInit {
  submitted: boolean | undefined;

  constructor(
    private modalService: NgbModal,
    private fb: UntypedFormBuilder,
    private formBuilder: FormBuilder
  ) {}
  closeResult: string | null = '';
  contact: Contact[] = new Array();
  searchText: any;
  contacts: UntypedFormGroup = Object.create(null);

  open(content: any) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  ngOnInit() {
    this.contacts = this.formBuilder.group({
      name: ['', Validators.required],
      post: ['', Validators.required],
      address: ['', Validators.required],
      contactno: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      insta: [
        '',
        [
          Validators.required,
          Validators.maxLength(5),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      linkedin: [
        '',
        [
          Validators.required,
          Validators.maxLength(5),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      facebook: [
        '',
        [
          Validators.required,
          Validators.maxLength(5),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
    });

    this.contact = [
      {
        img: 'assets/images/users/user1.jpg',
        name: 'Johnathan Doe',
        post: 'Web Designer',
        address: '795 Folsom Ave, Suite 600 San Francisco, CADGE 94107',
        contactno: 1234567890,
        insta: 254,
        linkedin: 54,
        facebook: 154,
      },
      {
        img: 'assets/images/users/user2.jpg',
        name: 'Oliver Smith',
        post: 'Theme Designer',
        address: '55 E 11th St #1OTH, Suite 600 New York, NY, 10003 ',
        contactno: 2122288403,
        insta: 150,
        linkedin: 14,
        facebook: 165,
      },
      {
        img: 'assets/images/users/user3.jpg',
        name: 'George Johnson',
        post: 'Front End Developer',
        address: '36 W 138th St, San Francisco New York, NY, 10037',
        contactno: 2122341783,
        insta: 300,
        linkedin: 65,
        facebook: 130,
      },
      {
        img: 'assets/images/users/user4.jpg',
        name: 'Harry Potter',
        post: 'Hacker',
        address: '2289 5th Ave, Suite 600 San Francisco New York, NY, 10037',
        contactno: 2124568403,
        insta: 220,
        linkedin: 38,
        facebook: 178,
      },
      {
        img: 'assets/images/users/user5.jpg',
        name: 'Jack Williams',
        post: 'Back End Developer',
        address: '425 5th Ave, San Francisco New York, NY, 10016',
        contactno: 1544568745,
        insta: 650,
        linkedin: 150,
        facebook: 195,
      },
      {
        img: 'assets/images/users/user1.jpg',
        name: 'Jacob Jones',
        post: 'Graphics Designer',
        address: '17 Stuyvesant Walk, Suite 600 New York, NY, 10009',
        contactno: 1507847890,
        insta: 151,
        linkedin: 29,
        facebook: 160,
      },
    ];
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.contact = this.filter(filterValue);
  }

  filter(v: string) {
    return this.contact.filter(
      (x) => x.name.toLowerCase().indexOf(v.toLowerCase()) !== -1
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contacts.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contacts.invalid) {
      return;
    }

    console.log(JSON.stringify(this.contacts.value, null, 2));
  }

  addContact() {
    const cnt: Contact = new Contact();
    cnt.img = 'assets/images/users/user1.jpg';

    if (this.contacts != null) {
      cnt.name = this.contacts?.get('name')?.value;
    }

    cnt.post = this.contacts?.get('post')?.value;
    cnt.address = this.contacts?.get('address')?.value;
    cnt.contactno = this.contacts?.get('contactno')?.value;
    cnt.insta = this.contacts?.get('insta')?.value;
    cnt.linkedin = this.contacts?.get('linkedin')?.value;
    cnt.facebook = this.contacts?.get('facebook')?.value;

    this.contact.push(cnt);
  }
}
