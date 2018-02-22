import {Component} from '@angular/core';
import {ShoppingListService} from "../../services/shopping-list";
import {NgForm} from "@angular/forms";
import {Ingredient} from "../../models/ingredient";
import {PopoverController} from "ionic-angular";
import {SLOptionsPage} from "./sl-options/sl-options";
import {AuthService} from "../../services/auth";


@Component({
	selector: 'page-shopping-lists',
	templateUrl: 'shopping-lists.html',
})
export class ShoppingListsPage {
	listItems: Ingredient[];

	public ingredientName: string = "Carrot";

	constructor(private slService: ShoppingListService,
	            private popoverCtrl: PopoverController,
	            private authService: AuthService) {
	}

	ionViewWillEnter() {
		this.loadItems();
	}

	onAddItem(form: NgForm) {
		this.slService.addItem(form.value.ingredientName, form.value.amount);
		form.reset();
		this.loadItems();
	}

	onCheckItem(index: number) {
		this.slService.removeItem(index);
		this.loadItems();
	}

	onShowOptions(event: MouseEvent) {
		const popover = this.popoverCtrl.create(SLOptionsPage);
		popover.present({ev: event});
		popover.onDidDismiss(
			data => {
				if (data.action == 'load') {

				} else {
					this.authService.getActiveUser().getIdToken()
						.then(
							(token: string) => {
								this.slService.storeList(token)
									.subscribe(
										() => console.log('Success'),
										error => {
											console.log(error);
										}
									);
							}
						);

				}
			}
		)

	}

	private	loadItems() {
		this.listItems = this.slService.getItems();
	}
}
