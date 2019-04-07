import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DairyComponent } from './dairy.component';
import { ProductService } from './services/products.services';

@NgModule({
  declarations: [
    DairyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ProductService ],
  bootstrap: [ DairyComponent ]
})
export class DairyModule { }
