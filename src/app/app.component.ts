import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/products.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title = 'module3-life-cycle';
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
