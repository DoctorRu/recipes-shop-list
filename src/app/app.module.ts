import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpClientModule} from "@angular/common/http";

import {MyApp} from './app.component';
import {EditRecipePage} from "../pages/edit-recipe/edit-recipe";
import {RecipePage} from "../pages/recipe/recipe";
import {RecipesPage} from "../pages/recipes/recipes";
import {ShoppingListsPage} from "../pages/shopping-lists/shopping-lists";
import {TabsPage} from "../pages/tabs/tabs";
import {ShoppingListService} from "../services/shopping-list";
import {RecipeServices} from "../services/recipes";
import {SigninPage} from "../pages/signin/signin";
import {SignupPage} from "../pages/signup/signup";
import {AuthService} from "../services/auth";
import {SLOptionsPage} from "../pages/shopping-lists/sl-options/sl-options";

@NgModule({
	declarations: [
		MyApp,
		EditRecipePage,
		RecipePage,
		RecipesPage,
		ShoppingListsPage,
		TabsPage,
		SigninPage,
		SignupPage,
		SLOptionsPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		HttpClientModule
	],
	bootstrap: [ IonicApp ],
	entryComponents: [
		MyApp,
		EditRecipePage,
		RecipePage,
		RecipesPage,
		ShoppingListsPage,
		TabsPage,
		SigninPage,
		SignupPage,
		SLOptionsPage
	],
	providers: [
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		StatusBar,
		SplashScreen,
		ShoppingListService,
		RecipeServices,
		AuthService
	]
})
export class AppModule {
}
