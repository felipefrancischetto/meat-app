import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { RestaurantService } from '../../restaurants.service';

import { MenuItem } from '../../../../models/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.menu = this.restaurantService
      .menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
