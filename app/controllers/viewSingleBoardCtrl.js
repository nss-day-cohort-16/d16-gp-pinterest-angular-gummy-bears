'use strict';

app.controller('ViewBoardCtrl', function($scope, AuthFactory, BoardsFactory, $routeParams, PinsFactory){
	PinsFactory.getAllBoardPins($routeParams.boardId);
		console.log("routeParams in ViewBoardCtrl", $routeParams.boardId);
	// .then((pinsArr) => {
	// 	$scope.selectedBoard = pinsArr;
	// 	$scope.$apply();
	// });
});

