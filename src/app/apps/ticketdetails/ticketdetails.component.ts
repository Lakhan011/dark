import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as c3 from 'c3';
import { Editor, NgxEditorModule } from 'ngx-editor';

@Component({
  templateUrl: './ticketdetails.component.html',
  standalone: true,
  imports: [NgxEditorModule, FormsModule, CommonModule, ReactiveFormsModule],
})
export class TicketdetailsComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  constructor() {}

  editor: Editor | any;
  html: string = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  ngAfterViewInit() {
    const chart = c3.generate({
      bindto: '#visitor',
      data: {
        columns: [
          ['Open', 4],
          ['Closed', 2],
          ['In progress', 2],
          ['Other', 0],
        ],
        type: 'donut',
      },
      donut: {
        label: {
          show: false,
        },
        title: 'Tickets',
        width: 35,
      },
      legend: {
        hide: true,
      },
      color: {
        pattern: ['#40c4ff', '#2961ff', '#ff821c', '#7e74fb'],
      },
    });
  }
}
