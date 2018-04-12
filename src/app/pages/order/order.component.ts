import { Component, OnInit } from '@angular/core';

import { RadioOption } from '../../models/radio-option.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOption: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão de Refeição', value: 'REG' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
