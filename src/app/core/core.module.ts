import { NgModule } from '@angular/core';

import { ShoppingCartService } from '../pages/restaurants/restaurant-details/shopping-cart/shopping-cart.service';
import { RestaurantService } from '../pages/restaurants/restaurants.service';
import { OrderService } from '../pages/order/order.service';

@NgModule({
  providers: [
    ShoppingCartService,
    RestaurantService,
    OrderService,
  ]
})
export class CoreModule {}

