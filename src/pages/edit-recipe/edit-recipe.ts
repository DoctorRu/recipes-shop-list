import {Component, OnInit} from '@angular/core';
import {ActionSheetController, AlertController, NavParams} from "ionic-angular";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
	selector: 'page-edit-recipe',
	templateUrl: 'edit-recipe.html',
})

export class EditRecipePage implements OnInit {

	public mode: string = 'New';
	public selectOptions = [ 'Easy', 'Medium', 'Hard' ];
	private recipeForm: FormGroup;

	constructor(private navParams: NavParams,
	            private actionSheetController: ActionSheetController,
	            private alertCtrl: AlertController) {
	}

	ngOnInit() {
		this.mode = this.navParams.get('mode');
		this.initializeForm();
	}

	onSubmit() {
		console.log(this.recipeForm);
	}

	onManageIngredients() {
		const actionSheet = this.actionSheetController.create({
			title: 'What do you want to do?',
			buttons: [
				{
					text: 'Add Ingredient',
					handler: () => {
						this.createNewIngredientAlert().present();
					}
				},
				{
					text: 'Remove all Ingredients',
					role: 'destructive',
					handler: () => {

					}
				},
				{
					text: 'Cancel',
					role: 'cancel'
				}
			]
		});
		actionSheet.present();

	}

	private initializeForm() {
		this.recipeForm = new FormGroup(
			{
				'title': new FormControl(null, Validators.required),
				'description': new FormControl(null, Validators.required),
				'difficulty': new FormControl('Medium', Validators.required),
				'ingredients': new FormArray([])


			});

	}

	private createNewIngredientAlert() {
		return this.alertCtrl.create({
			title: 'Add Ingredient',
			inputs: [
				{
					name: 'name',
					placeholder: 'Name'
				}
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel'
				},
				{
					text: 'Add',
					handler: data => {
						if (data.name.trim() == '' || data.name == null) {
							return;
						}
						(<FormArray>this.recipeForm.get('ingredients'))
							.push(new FormControl(data.name, Validators.requiredTrue));
					}
				}
			]
		});
	}


}
