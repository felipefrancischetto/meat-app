import { Injectable } from '@angular/core';

import { MenuItem } from './../../../../models/menu-item.model';
import { CartItem } from '../../../../models/cart-item.model';

@Injectable()
export class ShoppingCartService {
  items: CartItem[] = [];

  addItem(item: MenuItem) {
    const foundItem = this.items
      .find((mItem) => mItem.menuItem.id === item.id);
    if (foundItem) {
      this.increaseQty(foundItem);
    } else  {
      this.items.push(new CartItem(item));
    }
  }

  increaseQty(item: CartItem) {
    item.quantity = item.quantity + 1;
  }

  decreaseQty(item: CartItem) {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  clear() {
    this.items = [];
  }

  total(): number {
    return this.items.map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
}

