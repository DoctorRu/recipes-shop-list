import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {EditRecipePage} from "../edit-recipe/edit-recipe";
import {Recipe} from "../../models/recipe";
import {RecipeServices} from "../../services/recipes";
import {RecipePage} from "../recipe/recipe";

@Component({
	selector: 'page-recipes',
	templateUrl: 'recipes.html',
})
export class RecipesPage {
	public recipes: Recipe[];


	constructor(private navCtrl: NavController,
	            private recipesService: RecipeServices){
	}

	ionViewWillEnter(){
		this.recipes = this.recipesService.getRecipes();
	}

	onNewRecipe(){
		this.navCtrl.push(EditRecipePage, {mode: 'New'});
	}

	onLoadRecipe(recipe: Recipe, index: number){
		this.navCtrl.push(RecipePage, {recipe: recipe, index: index})

	}

}
