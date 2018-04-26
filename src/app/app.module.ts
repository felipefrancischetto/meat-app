import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { ComponentsModule } from './shared/components/components.module';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { RestaurantComponent } from './pages/restaurants/restaurant/restaurant.component';
import { RestaurantDetailsComponent } from './pages/restaurants/restaurant-details/restaurant-details.component';
import { MenuComponent } from './pages/restaurants/restaurant-details/menu/menu.component';
import { MenuItemComponent } from './pages/restaurants/restaurant-details/menu-item/menu-item.component';
import { ShoppingCartComponent } from './pages/restaurants/restaurant-details/shopping-cart/shopping-cart.component';
import { ReviewsComponent } from './pages/restaurants/restaurant-details/reviews/reviews.component';
import { OrderSummaryComponent } from './pages/order/order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailsComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    ReviewsComponent,
    OrderSummaryComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    ComponentsModule,
    RouterModule.forRoot(ROUTES),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

