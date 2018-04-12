import { Component, OnInit } from '@angular/core';

import { Restaurant } from './../../models/restaurant.model';
import { RestaurantService } from './restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(
    private restaurantsService: RestaurantService,
  ) { }

  ngOnInit() {
    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}
