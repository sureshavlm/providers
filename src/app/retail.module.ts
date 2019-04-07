import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RetailComponent } from './retail.component';
import { ProductService } from './services/products.services';

@NgModule({
  declarations: [
    RetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ProductService ],
  bootstrap: [ RetailComponent ]
})
export class RetailModule { }
