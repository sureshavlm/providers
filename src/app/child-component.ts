import { Component, OnChanges, Input } from '@angular/core';
import { ProductService } from './services/products.services';

@Component({
	selector: 'child-component',
	template: '<h2>{{heading}}</h2> ' +
				'<input type="text" [(ngModel)]="heading">' + 
				'<button (click)="update()">Update</button>'
})

export class ChildComponent implements OnChanges {
	
	@Input()
	heading: string
	productService: ProductService;
	product: any = [];

	constructor(_productService: ProductService) {
		this.productService = _productService;
	}

	ngOnChanges() {
		console.log('***** OnChange Invoked from Child Comp ****');

		this.product = this.productService.queryProducts();
	}

	update() {
		this.heading = this.heading + "d3443";
	}
}