'use strict';

app.controller('ViewUserBoardsCtrl', function($scope, PinsFactory, BoardsFactory, AuthFactory, $window){
console.log("newPinCtrlRunning: ");

let currentUser = AuthFactory.getUser();

BoardsFactory.getUserBoards(currentUser)
	.then(function(allUserBoards){
		console.log('allUserBoards', allUserBoards);
			$scope.boards = allUserBoards;
			$scope.$apply();
	});
$scope.removeBoard = function(board) {
	console.log("boardId",board.id );
		BoardsFactory.deleteBoards(board.id)
	.then(()=> {
			// window.location("#/");
			$scope.$apply();
		});
	};
});