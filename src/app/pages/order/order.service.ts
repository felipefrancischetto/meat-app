import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { MEAT_API } from './../../app.api';
import { ShoppingCartService } from '../restaurants/restaurant-details/shopping-cart/shopping-cart.service';
import { CartItem } from '../../models/cart-item.model';
import { Order } from '../../models/order.model';

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService, private http: Http) {}

  itemsValue(): number {
    return this.cartService.total();
  }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  clear() {
    this.cartService.clear();
  }

  checkOrder(order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(
        `${MEAT_API}/orders`,
        JSON.stringify(order),
        new RequestOptions({ headers: headers })
      )
      .map(res => res.json());
  }
}
