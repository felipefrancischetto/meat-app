import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './pages/restaurants/restaurant-details/restaurant-details.component';
import { MenuComponent } from './pages/restaurants/restaurant-details/menu/menu.component';
import { ReviewsComponent } from './pages/restaurants/restaurant-details/reviews/reviews.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderSummaryComponent } from './pages/order/order-summary/order-summary.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurants/:id',
    component: RestaurantDetailsComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MenuComponent },
      { path: 'reviews', component: ReviewsComponent },
    ],
  },
  { path: 'about', loadChildren: './pages/about/about.module#AboutModule' },
  { path: 'order', loadChildren: './pages/order/order.module#OrderModule' },
  { path: 'order-summary', component: OrderSummaryComponent },
];
