import { Component, OnInit } from '@angular/core';
import { TicketService } from './tickets.service';
import { Ticket } from './ticket';
import {
  Validators,
  FormBuilder,
  AbstractControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { CommonModule, DatePipe } from '@angular/common';
import { NgbHighlight, NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherModule } from 'angular-feather';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    FeatherModule,
    NgbHighlight
  ],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  providers: [TicketService, DatePipe]
})
export class TicketsComponent implements OnInit {
  closed = 0;
  open = 0;
  pending = 0;
  ticketsList: Ticket[] = this.ticketService.getTickets();
  filterTickets: Ticket[];
  ticketDate: string | null = null;
  ticketDetail: Ticket | null = null;

  submitted = false;

  editTicket: FormGroup = Object.create(null);

  page = 1;
  pageSize = 5;

  createButtonClick = true;

  totalLengthOfCollection = 0;

  _searchTerm = '';

  constructor(
    private ticketService: TicketService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private datePipe: DatePipe
  ) {
    this.filterTickets = this.ticketsList;
    this.totalLengthOfCollection = this.filterTickets.length;
  }

  ngOnInit() {
    this.editTicket = this.fb.group({
      ticketTitle: ['', Validators.required],
      ticketDescription: ['', Validators.required],
      Date: ['', Validators.required],
      Status: ['', Validators.required],
      AgentName: ['', Validators.required],
    });

    this.filterTickets = this.ticketsList;
    if (this.ticketService) {
      this.open = this.ticketService
        .getTickets()
        .filter((x) => x.Status === 'Open').length;
      this.pending = this.ticketService
        .getTickets()
        .filter((x) => x.Status === 'Pending').length;
      this.closed = this.ticketService
        .getTickets()
        .filter((x) => x.Status === 'Closed').length;
    }

    this.editTicket = this.fb.group({
      Id: [''],
      Status: ['', Validators.required],
      ticketTitle: ['', Validators.required],
      ticketDescription: ['', Validators.required],
      AgentName: ['', Validators.required],
      Date: [''],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.editTicket.controls;
  }

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(val: string) {
    this._searchTerm = val;
    this.filterTickets = this.filter(val);
    this.totalLengthOfCollection = this.filterTickets.length;
  }

  filter(v: string) {
    return this.ticketService
      .getTickets()
      .filter(
        (x) =>
          x.AgentName?.toLowerCase().indexOf(v.toLowerCase()) !== -1 ||
          x.ticketTitle?.toLowerCase().indexOf(v.toLowerCase()) !== -1 ||
          x.Status?.toLowerCase().indexOf(v.toLowerCase()) !== -1
      );
  }

  openModal(targetModal: any, ticket: Ticket | null) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
    });
    if (ticket == null) {
      this.createButtonClick = false;
    }
    if (ticket != null) {
      this.ticketDetail = ticket;
      this.editTicket.patchValue({
        Id: ticket.Id,
        Status: ticket.Status,
        ticketTitle: ticket.ticketTitle,
        ticketDescription: ticket.ticketDescription,
        AgentName: ticket.AgentName,
        Date: ticket.Date,
      });
    }
  }

  onSubmit() {
    if (this.ticketDetail != null) {
      const index = this.ticketService.getTickets().indexOf(this.ticketDetail);

      this.ticketDetail.Status = this.editTicket?.get('Status')?.value;
      this.ticketDetail.ticketTitle =
        this.editTicket?.get('ticketTitle')?.value;
      this.ticketDetail.ticketDescription =
        this.editTicket?.get('ticketDescription')?.value;
      this.ticketDetail.AgentName = this.editTicket?.get('AgentName')?.value;
      this.ticketDetail.Date = this.editTicket?.get('Date')?.value;
      switch (this.ticketDetail.Status) {
        case 'Pending':
          this.ticketDetail.Label = 'warning';
          break;

        case 'Open':
          this.ticketDetail.Label = 'success';
          break;

        case 'Closed':
          this.ticketDetail.Label = 'danger';
          break;

        default:
      }
      this.ticketService.getTickets()[index] = this.ticketDetail;
    } else {
      this.ticketDetail = new Ticket();

      this.ticketDetail.Id =
        Math.max.apply(
          Math,
          this.ticketService.getTickets().map(function (o) {
            return o.Id;
          })
        ) + 1;

      this.ticketDetail.Status = this.editTicket?.get('Status')?.value;
      this.ticketDetail.ticketTitle =
        this.editTicket?.get('ticketTitle')?.value;
      this.ticketDetail.ticketDescription =
        this.editTicket?.get('ticketDescription')?.value;
      this.ticketDetail.AgentName = this.editTicket?.get('AgentName')?.value;
      this.ticketDetail.Date = new Date();
      switch (this.ticketDetail.Status) {
        case 'Pending':
          this.ticketDetail.Label = 'warning';
          break;

        case 'Open':
          this.ticketDetail.Label = 'success';
          break;

        case 'Closed':
          this.ticketDetail.Label = 'danger';
          break;

        default:
      }
      this.ticketService.getTickets().push(this.ticketDetail);
    }
    this.modalService.dismissAll();
    this.ticketDate = '';
    this.ticketDetail = null;
    this.ngOnInit();
  }

  closeBtnClick() {
    this.modalService.dismissAll();
    this.ngOnInit();
  }

  deleteTicket(id: number): void {
    this.filterTickets = this.filterTickets.filter(
      (ticket) => ticket.Id !== id
    );
    this.ticketsList = this.ticketsList.filter((ticket) => ticket.Id !== id);

    if (this.ticketService) {
      this.open = this.filterTickets.filter((x) => x.Status === 'Open').length;
      this.pending = this.filterTickets.filter(
        (x) => x.Status === 'Pending'
      ).length;
      this.closed = this.filterTickets.filter(
        (x) => x.Status === 'Closed'
      ).length;
    }

    this.totalLengthOfCollection = this.filterTickets.length;
  }

  filterByStatus(type: string) {
    this.filterTickets = this.ticketService.getTickets();
    this.searchTerm = '';
    if (type === 'All') {
      this.filterTickets = this.ticketsList;
      this.totalLengthOfCollection = this.ticketsList.length;
      return this.filterTickets;
    } else {
      this.filterTickets = this.filterTickets.filter(
        (ticket) => ticket.Status === type
      );
      this.totalLengthOfCollection = this.filterTickets.length;
      return this.filterTickets;
    }
  }
}
