import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import firebase from 'firebase';

import {TabsPage} from "../pages/tabs/tabs";
import {SigninPage} from "../pages/signin/signin";
import {SignupPage} from "../pages/signup/signup";


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	tabsPage: any = TabsPage;
	signinPage = SigninPage;
	signupPage = SignupPage;
	@ViewChild('nav') nav: NavController;

	constructor(platform: Platform,
	            private menuCtrl: MenuController) {

		firebase.initializeApp({
			apiKey: "AIzaSyCF1c1enmeJmDHt_G-DhY_R5DLcwtQXbQk",
			authDomain: "recipe-book-11b74.firebaseapp.com"
		});

		platform.ready().then(() => {
		});
	}

	onLoad(page: any) {
		this.nav.setRoot(page);
		this.menuCtrl.close();
	}

}

