import { Routes } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { TicketsComponent } from './ticketlist/tickets.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { FullcalendarComponent } from "./fullcalendar/fullcalendar.component";
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import { ContactComponent } from './contact/contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TasksComponent } from './tasks/tasks.component';
import { ContactListComponent } from './contact-list/contact-list.component';

import { MailboxComponent } from './mail/mailbox.component';
import { DetailComponent } from './mail/detail/detail.component';
import { ComposeComponent } from './mail/compose/compose.component';

import { ListUsersComponent } from './users/list-users/list-users.component';

import { UserRxjsComponent } from './user-rxjs/user-rxjs.component';
import { ContactRxjsComponent } from './contact-rxjs/contact-rxjs.component';
import { ContactListRxjsComponent } from './contact-list-rxjs/contact-list-rxjs.component';

import { ListInvoicesComponent } from './invoice/list-invoices/list-invoices.component';
import { AddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { ViewInvoiceComponent } from './invoice/view-invoice/view-invoice.component';
import { EditInvoiceComponent } from './invoice/edit-invoice/edit-invoice.component';

import { JobsListComponent } from './jobs/jobs-list/jobs-list.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { JobApplyComponent } from './jobs/job-apply/job-apply.component';

export const AppsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'chat',
        component: ChatComponent,
        
      },

      {
        path: 'mail/:type',
        component: MailboxComponent,
        children: [
          { path: ':id', component: DetailComponent },
          { path: 'compose', component: ComposeComponent },
        ],
        
      },

      {
        path: 'ticket/ticketlist',
        component: TicketsComponent,
        
      },
      {
        path: 'ticket/ticketdetails',
        component: TicketdetailsComponent,
        
      },
      {
        path: 'taskboard',
        component: TaskboardComponent,
        
      },
      {
        path: "fullcalendar",
        component: FullcalendarComponent,
      
      },
      {
        path: 'todo',
        component: TodosComponent,
       
      },
      {
        path: 'tasks',
        component: TasksComponent,
       
      },
      {
        path: 'contact-list',
        component: ContactListComponent,
       
      },
      {
        path: 'contact-list-rxjs',
        component: ContactListRxjsComponent,
       
      },
      {
        path: 'notes',
        component: NotesComponent,
       
      },
      {
        path: 'users',
        component: ListUsersComponent,
        
      },
      {
        path: 'usersrxjs',
        component: UserRxjsComponent,
        
      },
      {
        path: 'contact-grid',
        component: ContactComponent,
        
      },
      {
        path: 'contact',
        component: ContactsComponent,
       
      },
      {
        path: 'contactrxjs',
        component: ContactRxjsComponent,
       
      },
      {
        path: 'invoice',
        component: ListInvoicesComponent,
        
      },
      {
        path: 'addinvoice',
        component: AddInvoiceComponent,
        
      },
      {
        path: 'viewinvoice/:id',
        component: ViewInvoiceComponent,
        
      },
      {
        path: 'editinvoice/:id',
        component: EditInvoiceComponent,
        
      },
      {
        path: 'jobs',
        component: JobsListComponent,
        
      },
      {
        path: 'job-detail/:id',
        component: JobDetailComponent,
        
      },
      {
        path: 'apply-job',
        component: JobApplyComponent,
        
      },
    ],
  },
];
