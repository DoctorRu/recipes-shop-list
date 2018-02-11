import {Component} from '@angular/core';

@Component({
	selector: 'page-shopping-lists',
	templateUrl: 'shopping-lists.html',
})
export class ShoppingListsPage {

	public ingredientName: string = 'Spinach';

	onAddItem(form: NgForm){
		console.log(form)

	}


}
