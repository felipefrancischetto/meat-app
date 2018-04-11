import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './pages/restaurants/restaurant-details/restaurant-details.component';
import { AboutComponent } from './pages/about/about.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurants/:id', component: RestaurantDetailsComponent },
  { path: 'about', component: AboutComponent },
];
