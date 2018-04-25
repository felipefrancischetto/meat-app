import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { RestaurantComponent } from './pages/restaurants/restaurant/restaurant.component';
import { RestaurantService } from './pages/restaurants/restaurants.service';
import { RestaurantDetailsComponent } from './pages/restaurants/restaurant-details/restaurant-details.component';
import { MenuComponent } from './pages/restaurants/restaurant-details/menu/menu.component';
import { MenuItemComponent } from './pages/restaurants/restaurant-details/menu-item/menu-item.component';
import { ShoppingCartComponent } from './pages/restaurants/restaurant-details/shopping-cart/shopping-cart.component';
import { ReviewsComponent } from './pages/restaurants/restaurant-details/reviews/reviews.component';
import { ShoppingCartService } from './pages/restaurants/restaurant-details/shopping-cart/shopping-cart.service';
import { OrderComponent } from './pages/order/order.component';
import { InputComponent } from './shared/components/input/input.component';
import { RadioComponent } from './shared/components/radio/radio.component';
import { OrderItemsComponent } from './pages/order/order-items/order-items.component';
import { OrderService } from './pages/order/order.service';
import { DeliveryCostsComponent } from './pages/order/delivery-costs/delivery-costs.component';
import { OrderSummaryComponent } from './pages/order/order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailsComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    RestaurantService,
    ShoppingCartService,
    OrderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
