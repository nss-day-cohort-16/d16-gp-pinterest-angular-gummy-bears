'use strict';

app.controller('ViewBoardCtrl', function($scope, AuthFactory, BoardsFactory, $routeParams, PinsFactory){
	PinsFactory.getAllBoardPins($routeParams.boardId)
		// console.log("routeParams in ViewBoardCtrl", $routeParams.boardId);
	.then((pinData) => {
		$scope.pins = pinData;
		// $scope.selectedBoard = pinsArr;
		$scope.$apply();
	});
});

