'use strict';

// Controller for viewing all of a user's boards

app.controller('UserBoardsCtrl', function($scope, AuthFactory, BoardsFactory, PinsFactory){
	
	let currentUser = AuthFactory.getUser();

	BoardsFactory.getUserBoards(currentUser)
	.then((data) => {
		// console.log('data', data);
		$scope.boards = data;
		console.log('$scope.boards', $scope.boards);

		$scope.boards.forEach((board) => {
			PinsFactory.getAllBoardPins(board.id)
			.then(function(data){
				console.log('data', data);
				board.pins = data;
			});
		$scope.$apply();

		});

		$scope.$apply();

	});

	// console.log('$scope.boards', $scope.boards);

});
