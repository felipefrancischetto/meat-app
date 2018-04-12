import { Component, OnInit, Input } from '@angular/core';

import { RadioOption } from '../../../models/radio-option.model';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent implements OnInit {

  @Input() options: RadioOption[];

  value: any;

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value;
  }

}
