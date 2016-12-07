'use strict';

// Controls the addBoard.html partial
app.controller('AddBoardCtrl', function($scope, BoardsFactory, $location, AuthFactory){
	
	let currentUser = AuthFactory.getUser();

	$scope.newUserBoard = {
		'uid': currentUser,
		'title': '',
		'description': '',
		'id': ''
	};



	$scope.addNewBoard = function(){
		let boardsArr = [];
		BoardsFactory.postNewBoard($scope.newUserBoard)
		.then((response) => {
			console.log('response after promise', response);
			$location.url();
			$scope.$apply();
		});
	};
});