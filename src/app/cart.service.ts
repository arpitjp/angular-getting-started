import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  // add to cart
  addToCart(product: Product) {
    this.items.push(product)
  }

  // clear cart
  clearCart() {
    this.items = [];
    return this.items;
  }

  // get cart items
  getCartItems() {
    return this.items
  }

  // fetches prices
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
