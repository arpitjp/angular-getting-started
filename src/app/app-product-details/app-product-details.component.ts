import { Component, OnInit } from '@angular/core';
import { products, Product } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-app-product-details',
  templateUrl: './app-product-details.component.html',
  styleUrls: ['./app-product-details.component.css']
})
export class AppProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('productId'));
    this.product = products.find(obj => obj.id === id);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(`${product.name} added to cart`);
  }
}
