import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../mock-products';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:any;
  private num:any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product:Product){
    this.cartService.addTocart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      this.num = params.get('productId');
      this.product = products[this.num];

    });
  }
}
