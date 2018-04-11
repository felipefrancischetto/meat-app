import { Component, OnInit, Input } from '@angular/core';

import { Restaurant } from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  @Input()
  public restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
