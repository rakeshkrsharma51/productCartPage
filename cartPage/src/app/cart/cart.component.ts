import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CartDetails } from '../models/cart.details';
import { CartItems } from '../models/cart.items';
import { CartSummary } from '../models/cart.summary';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartDetails: any;
  cartItems: CartItems;
  cartSummary: CartSummary;
  baseUrl = 'https://run.mocky.io/v3/ca987707-db46-419e-9178-2bbdde3c3762';

  constructor(private service: APIService) {}

  ngOnInit() {
    this.service.getMockData().subscribe((response) => {
      if (response) {
        this.cartDetails = response;
        this.cartItems = this.cartDetails.cartDetails.cartItems;
        this.cartSummary = this.cartDetails.cartDetails.cartSummary;
      }
    });
  }

}
