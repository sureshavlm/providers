import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/products.services';

@Component({
  selector: 'dairy-component',
  templateUrl: './dairy.component.html'
})

export class DairyComponent implements OnInit {
  
  productService: ProductService;
  products: any = [];

  constructor(private _productService: ProductService) {

    this.productService = _productService; //got a object

  }

  ngOnInit() {
    this.products = this.productService.queryProducts('Dairy'); 
    //invoking a method
  }

}
