import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { RestaurantService } from '../../restaurants.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any> ;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.reviews = this.restaurantService
      .reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
