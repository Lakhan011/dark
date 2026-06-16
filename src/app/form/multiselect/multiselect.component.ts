import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-multiselect',
  standalone: true,
  imports: [NgSelectModule, FormsModule, CommonModule],
  templateUrl: './multiselect.component.html',
})
export class MultiselectComponent implements OnInit {
  selectedCar: number;
  selectedCar2: number;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  constructor(private config: NgSelectConfig) {
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }
  toggleDisabled() {
    const car2: any = this.cars[1];
    car2.disabled = !car2.disabled;
  }

  ngOnInit() { }
}
