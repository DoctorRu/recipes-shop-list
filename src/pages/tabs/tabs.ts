import {Component} from '@angular/core';
import {ShoppingListsPage} from "../shopping-lists/shopping-lists";
import {RecipesPage} from "../recipes/recipes";

@Component({
	selector: 'page-tabs',
	templateUrl: 'tabs.html',
})

export class TabsPage {
	slPage = ShoppingListsPage;
	recipesPage = RecipesPage;
}
