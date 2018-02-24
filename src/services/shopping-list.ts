import {Ingredient} from "../models/ingredient";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {AuthService} from "./auth";

@Injectable()

export class ShoppingListService{
	private ingredients: Ingredient[] = [];

	constructor(private http: HttpClient,
	            private authService: AuthService){
	}

	addItem(name: string, amount: number){
		this.ingredients.push(new Ingredient(name, amount));
	}

	addItems(items: Ingredient[]){
		this.ingredients.push(...items); // ... will convert array to individual elements
	}

	getItems(){
		return this.ingredients.slice(); // slice will create a copy of array
	}

	removeItem(index: number){
		this.ingredients.splice(index, 1)
	}

	storeList(token: string){
		const userId = this.authService.getActiveUser().uid;

		return this.http.put('https://recipe-book-11b74.firebaseio.com/' + userId + '/shopping-list.json?auth=' + token,
			this.ingredients)
	}

	fetchList(token: string){
		const userId = this.authService.getActiveUser().uid;

		return this.http.get('https://recipe-book-11b74.firebaseio.com/'
			+ userId + '/shopping-list.json?auth=' + token)
	}


}