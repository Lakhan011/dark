import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { InvoiceList } from '../invoice';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-invoice',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-invoice.component.html',
  providers: [InvoiceService]
})
export class ViewInvoiceComponent implements OnInit {
  id: any;
  invoiceDetail: InvoiceList;

  constructor(
    activatedRouter: ActivatedRoute,
    private invoiceService: InvoiceService
  ) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
    this.invoiceDetail = this.invoiceService
      .getInvoiceList()
      .filter((x) => x.id === +this.id)[0];
  }

  ngOnInit() {}
}
