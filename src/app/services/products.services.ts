import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
	
	products = [];
	temp = [];

	queryProducts(category) {

		
		this.products =  [
				{name: 'Cadbery', category: 'Dairy'},
				{name: 'Arun Icream', category: 'Dairy'},
				{name: 'Dell D5354', category: 'Retail'},
				{name: 'Lenova', category: 'Retail'},
				{name: 'DLink Router', category: 'Network'},
				{name: 'TwoPin Socket', category: 'Netowrk'}
				];
				
		this.temp = [];
		for(var i = 0; i< this.products.length; i ++ ){
			if(this.products[i].category == category){
				this.temp.push(this.products[i]);
			}
		}

		return this.temp;
	}

	addProducts() {

	}

	deleteProduct() {

	}

	updateProduct() {

	}
}