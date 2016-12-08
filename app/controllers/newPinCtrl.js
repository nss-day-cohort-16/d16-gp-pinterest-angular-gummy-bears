'use strict';

app.controller('NewPinCtrl', function($scope, PinsFactory, BoardsFactory, AuthFactory, FBCreds, $window){

	let currentUser = AuthFactory.getUser();
	

	BoardsFactory.getUserBoards(currentUser)
	.then(function(allUserBoards){
		console.log('allUserBoards', allUserBoards);
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
		console.log('$scope.newUserPin', $scope.newUserPin);
		let userPin = $scope.newUserPin;
		console.log('userPin', userPin);
		PinsFactory.postNewPin(userPin)
		.then((response) => {
			$window.location.url = ('/');
			$scope.$apply();
		});
	};
});