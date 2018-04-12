import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './pages/restaurants/restaurant-details/restaurant-details.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/restaurants/restaurant-details/menu/menu.component';
import { ReviewsComponent } from './pages/restaurants/restaurant-details/reviews/reviews.component';
import { OrderComponent } from './pages/order/order.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurants/:id', component: RestaurantDetailsComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent},
    ]},
  { path: 'about', component: AboutComponent },
  { path: 'order', component: OrderComponent },
];
