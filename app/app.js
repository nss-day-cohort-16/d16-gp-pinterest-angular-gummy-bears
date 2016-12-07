'use strict';

let app = angular.module('PinterestApp', ['ngRoute']);

let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
	AuthFactory.isAuthenticated()
	.then((userExists) => {
		if(userExists){
			resolve();
		} else {
			reject();
		}
	});
});

app.config(function($routeProvider){
	$routeProvider
	.when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl'
	})
	.when('/home', {
		templateUrl: 'partials/viewAllPins.html',
		controller: 'ViewAllCtrl'
	})
	.when('/addBoard', {
		templateUrl: 'partials/addBoard.html',
		controller: 'AddBoardCtrl',
		resolve: {isAuth}
	})
	.when('/addPin', {
		templateUrl: 'partials/newPin.html',
		controller: 'NewPinCtrl'
	})
	.otherwise('/');
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain
	};
	firebase.initializeApp(authConfig);
});
