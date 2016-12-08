'use strict';

app.controller('NewPinCtrl', function($scope, PinsFactory, BoardsFactory, AuthFactory, FBCreds, $location){

	let currentUser = AuthFactory.getUser();


	BoardsFactory.getUserBoards(currentUser)
	.then(function(allUserBoards){
		$scope.userBoards = allUserBoards;
		$scope.$apply();
	});


	$scope.newUserPin = {
		"boardid": "",
		"id": "",
		"img": "",
		"uid": currentUser,
		"caption": ""
	};

	$scope.addNewPin = function(newUserPin){
		let userPin = $scope.newUserPin;
		PinsFactory.postNewPin(userPin)
		.then((response) => {
			PinsFactory.getAllBoardPins(userPin.boardid).then ((response) => {
				console.log("user pins board id", userPin.boardid);
				// $scope.$apply();
			});
				window.location = (`/#/boards/${userPin.boardid}`);
		});
	};
});