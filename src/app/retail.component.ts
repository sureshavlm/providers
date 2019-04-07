import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/products.services';

@Component({
  selector: 'retail-component',
  templateUrl: './retail.component.html'
})

export class RetailComponent implements OnInit {
  
  productService: ProductService;
  products: any = [];

  constructor(private _productService: ProductService) {

    this.productService = _productService; //got a object

  }

  ngOnInit() {
    this.products = this.productService.queryProducts(); 
    //invoking a method
  }

}
