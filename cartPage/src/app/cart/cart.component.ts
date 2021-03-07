import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CartDetails } from '../models/cart.details';
import { CartItems } from '../models/cart.items';
import { CartSummary } from '../models/cart.summary';
import { APIService } from '../services/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartDetails: any;
  cartItems: [CartItems];
  cartSummary: CartSummary;
  baseUrl = 'https://run.mocky.io/v3/ca987707-db46-419e-9178-2bbdde3c3762';
  noOfItems = 0;

  constructor(private service: APIService) {}

  ngOnInit() {
    this.service.getMockData().pipe(map((response: any) => {
       response.cartDetails.cartItems.map(data => data.wishlist = false);
       return response;
    })).subscribe((response) => {
      if (response) {
        this.cartDetails = response;
        this.cartItems = this.cartDetails.cartDetails.cartItems;
        this.cartSummary = this.cartDetails.cartDetails.cartSummary;
        this.noOfItems = this.cartItems.length;
      }
    });
  }

  removeItems(index: number) {
    let item = + this.cartItems[index].itemQuantity;
    if (item >= 2) {
      item -= 1;
      const amount = this.cartItems[index].itemAmount;
      amount.itemTotalPrice = amount.itemTotalPrice - amount.itemPrice;
      this.cartItems[index].itemQuantity = item.toString();
      this.subTotal();
    }
  }

  addItems(index: number) {
    let item = + this.cartItems[index].itemQuantity;
    item += 1;
    const amount = this.cartItems[index].itemAmount;
    amount.itemTotalPrice = amount.itemTotalPrice + amount.itemPrice;
    this.cartItems[index].itemQuantity = item.toString();
    this.subTotal();
  }

  deleteItem(index: number) {
    this.cartItems.splice(index, 1);
    this.noOfItems -= 1;
    this.subTotal();
  }

  subTotal() {
    this.cartSummary.subtotal = Object.values(this.cartItems).reduce((total, {itemAmount}) => total + itemAmount.itemTotalPrice, 0);
    this.cartSummary.cartTotal = this.cartSummary.subtotal + this.cartSummary.shippingAmount;
  }

  addWishlist(index: number) {
    this.cartItems[index].wishlist = !this.cartItems[index].wishlist;
  }

  checkOut() {
    alert('Page is under construction!!!');
  }

}
