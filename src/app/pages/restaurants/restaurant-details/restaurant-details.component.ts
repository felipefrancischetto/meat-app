import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantService } from '../restaurants.service';

import { Restaurant } from './../../../models/restaurant.model';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html'
})
export class RestaurantDetailsComponent implements OnInit {

  restaurant: Restaurant;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.restaurantService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
