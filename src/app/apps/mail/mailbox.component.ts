import { Component, OnInit } from '@angular/core';
// import { MailGlobalVariable } from './mail.service';
import { ListingComponent } from './listing/listing.component';
import { DetailComponent } from './detail/detail.component';
import { ComposeComponent } from './compose/compose.component';
import { CommonModule } from '@angular/common';
import { MailGlobalVariable } from './mail.service';

@Component({
    selector: 'app-mailbox',
    standalone: true,
    imports:[ListingComponent, DetailComponent, ComposeComponent, CommonModule],
    templateUrl: './mailbox.component.html',
    styleUrls: ['./mailbox.component.css'],
    providers: [MailGlobalVariable]
})
export class MailboxComponent implements OnInit {


    constructor() { }

    ngOnInit(): void { }
}
