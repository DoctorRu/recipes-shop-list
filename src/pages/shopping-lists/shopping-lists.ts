import {Component} from '@angular/core';
import {ShoppingListService} from "../../services/shopping-list";
import {NgForm} from "@angular/forms";
import {Ingredient} from "../../models/ingredient";


@Component({
	selector: 'page-shopping-lists',
	templateUrl: 'shopping-lists.html',
})
export class ShoppingListsPage {
	listItems: Ingredient[];

	public ingredientName: string = "Carrot";

	constructor(private slService: ShoppingListService){

	}

	ionViewWillEnter(){
		this.loadItems();
	}

	onAddItem(form: NgForm){
		this.slService.addItem(form.value.ingredientName, form.value.amount);
		form.reset();
		this.loadItems();
	}

	onCheckItem(index: number){
		this.slService.removeItem(index);
		this.loadItems();
	}

	private loadItems(){
		this.listItems = this.slService.getItems();
	}
}
