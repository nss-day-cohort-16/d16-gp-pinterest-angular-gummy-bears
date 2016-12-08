'use strict';

app.controller('NavCtrl', function($scope){
	$scope.navItems = [
		{
			name: 'Login/Register',
			url: '#/login'
		},
		{
			name: 'Logout',
			url: '#/logout'
		},
		{
			name: 'Add board',
			url: '#/addBoard'
		},
		{
			name: 'Add pin',
			url: '#/addPin'
		},
		{
			name: 'View my boards',
			url: '#/myBoards'
		}
	];
});