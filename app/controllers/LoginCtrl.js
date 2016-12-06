'use strict';

app.controller('LoginCtrl', function($scope, AuthFactory, $window){

	$scope.account = {
		email: '',
		password: ''
	};

	$scope.register = () => {
		AuthFactory.createUser($scope.account)
		.then((userData) => {
			$scope.login();
		});
	};

	$scope.login = () => {
		AuthFactory.loginUser($scope.account)
		.then((user) => {
			console.log('user', user);
			$window.location.href = '/';
		});
	};

});