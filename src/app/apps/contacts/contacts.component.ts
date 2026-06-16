import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  public showSidebar = false;

  contacts = this.contactService.getContacts();
  selectedContact: Contact | null = null;
  show = true;
  editSave = 'Edit';

  filterArray: Contact[] = [];

  _searchTerm = '';

  mobileSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(val: string) {
    this._searchTerm = val;
    this.filterArray = this.filter(val);
  }

  filter(v: string) {
    return this.contacts.filter(
      (x) =>
        x.firstName.toLowerCase().indexOf(v.toLowerCase()) !== -1 ||
        x.lastName.toLowerCase().indexOf(v.toLowerCase()) !== -1
    );
  }

  constructor(public contactService: ContactService) {}

  ngOnInit() {
    this.filterArray = this.contacts;
    if (this.contacts.length > 0) {
      this.onSelect(this.contacts[0]);
    }
  }

  onSelect(contact: Contact) {
    this.selectedContact = contact;
  }

  editContact() {
    if (this.editSave === 'Save') {
      this.show = true;
      this.editSave = 'Edit';
    } else {
      this.show = false;
      this.editSave = 'Save';
    }
  }

  addContact() {
    this.contacts.push({
      firstName: 'Enter',
      lastName: 'Name',
      mobile: '',
      home: '',
      company: '',
      work: '',
      notes: '',
      imagePath: 'assets/images/users/user1.jpg',
    });

    this.filterArray = this.contacts;
    this.selectedContact = this.filterArray[this.filterArray.length - 1];
    this.editContact();
  }

  deleteContact(i: Contact) {
    this.contacts = this.contacts.filter(
      (con) => con.firstName !== i.firstName
    );
    this.filterArray = this.contacts.filter(
      (con) => con.firstName !== i.firstName
    );

    this.selectedContact = null;
  }
}
