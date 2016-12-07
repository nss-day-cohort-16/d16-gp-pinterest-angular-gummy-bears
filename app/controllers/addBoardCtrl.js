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
		BoardsFactory.postNewBoard($scope.newUserBoard)
		.then((response) => {
			console.log('boardsArr', boardsArr);
			// view all boards
			$location.url();
			$scope.$apply();
		});
	};
});