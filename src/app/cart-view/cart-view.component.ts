import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {
  items = this.cartService.getCartItems();

  cartForm = this.formBuilder.group({
    name: '',
    address: '',
  })

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit() {
    // log things
    window.alert(JSON.stringify(this.cartForm.value));
    // reset form fields
    this.cartForm.reset();
    // clear cart
    this.items = this.cartService.clearCart();
    window.alert(JSON.stringify(this.cartForm.value));
  }
}
