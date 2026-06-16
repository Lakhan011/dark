import { Component, AfterViewInit } from '@angular/core';
@Component({
  templateUrl: './starter.component.html',
  standalone: true
})
export class StarterComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() {}
}
