import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<any>();

  rates: number[] = [1, 2, 3, 4, 5];
  rate = 0;
  previuesRate;

  constructor() { }

  ngOnInit() {
  }

  setRate(rate) {
    this.rate = rate;
    this.previuesRate = undefined;
    this.rated.emit(this.rate);
  }

  setTemporaryRate(r: number) {
    if (this.previuesRate === undefined) {
      this.previuesRate = this.rate;
    }
    this.rate = r;
  }

  clearTemporaryRate() {
    if (this.previuesRate !== undefined) {
      this.rate = this.previuesRate;
      this.previuesRate = undefined;
    }
  }
}
