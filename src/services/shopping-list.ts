import {Ingredient} from "../models/ingredient";

// NOTE:
//  In app/app.module.ts
// Services must be included in
// providers section not in declarations

export class ShoppingListService{
	private ingredients: Ingredient[] = [];

	addItem(name: string, amount: number){
		this.ingredients.push(new Ingredient(name, amount));


		console.log(this.ingredients);
	}

	addItems(items: Ingredient[]){
		this.ingredients.push(...items); // ... will convert array to individual elements
		console.log(this.ingredients);
	}

	getItems(){
		return this.ingredients.slice(); // slice will create a copy of array
	}

	removeItem(index: number){
		this.ingredients.splice(index, 1)
	}
}