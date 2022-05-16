import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../product';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  @Input() product_input?:Product;
  @Output() notifyme = new EventEmitter();
}
