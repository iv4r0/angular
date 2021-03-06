import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  items:Product[] = [];
  checkoutForm:any;

  constructor(
    private cartService:CartService,
    private formBuilder: FormBuilder,
    ) {
      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
      });
    }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData:any){

    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}
