'use strict';

app.controller('NewPinCtrl', function($scope, PinsFactory, BoardsFactory, AuthFactory){
console.log("newPinCtrlRunning: ");

	let currentUser = AuthFactory.getUser();

	$scope.allBoards = BoardsFactory.getAllBoards()
	.then(function(allBoardsArr){
	$scope.userBoards = allBoardsArr;// will use boards factory to get user boards?
		$scope.$apply();
	});


	$scope.newUserPin = {
		"boardid": "",
		"id": "",
		"img": "",
		"uid": currentUser,
		"caption": ""
	};

	// $scope.addNewPin = function(){
	// 	PinsFactory.postNewPin($scope.newUserPin)
	// 	.then((response) => {
	// 		// console.log("response = ", response);
	// 		$location.url("");
	// 		$scope.$apply();
	// 	});
	// };
});