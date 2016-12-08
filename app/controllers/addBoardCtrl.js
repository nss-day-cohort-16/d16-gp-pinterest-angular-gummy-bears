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
			// console.log("response = ", response);
			$location.url("/myBoards");
			$scope.$apply();
		});
	};

	
});





