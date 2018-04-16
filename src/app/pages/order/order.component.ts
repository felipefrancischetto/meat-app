import { CartItem } from './../../models/cart-item.model';
import { Component, OnInit } from '@angular/core';

import { RadioOption } from '../../models/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery = 8;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão de Refeição', value: 'REG' },
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems() {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

}
