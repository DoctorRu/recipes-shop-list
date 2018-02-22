import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import firebase from 'firebase';

import {TabsPage} from "../pages/tabs/tabs";
import {SigninPage} from "../pages/signin/signin";
import {SignupPage} from "../pages/signup/signup";
import {AuthService} from "../services/auth";


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	rootPage: any = TabsPage;
	signinPage = SigninPage;
	signupPage = SignupPage;
	isAuthenticated = false;
	@ViewChild('nav') nav: NavController;

	constructor(platform: Platform,
	            private menuCtrl: MenuController,
	            private authService: AuthService) {

		firebase.initializeApp({
			apiKey: "AIzaSyCF1c1enmeJmDHt_G-DhY_R5DLcwtQXbQk",
			authDomain: "recipe-book-11b74.firebaseapp.com"
		});

		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.isAuthenticated = true;
				this.rootPage = TabsPage;
			} else {
				this.isAuthenticated = false;
				this.rootPage = SigninPage;
			}
		});

		platform.ready().then(() => {
		});
	}

	onLoad(page: any) {
		this.nav.setRoot(page);
		this.menuCtrl.close();
	}

	onLogout(){
		this.authService.logout();
		this.menuCtrl.close();
		this.nav.setRoot(SigninPage);
	}

}

