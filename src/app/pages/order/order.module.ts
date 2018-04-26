import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../shared/components/components.module';

import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';

const ROUTES: Routes = [
  { path: '', component: OrderComponent },
];

@NgModule({
  declarations: [
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
  ],
  imports: [
    ComponentsModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class OrderModule {}
