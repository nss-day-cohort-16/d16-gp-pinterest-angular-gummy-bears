'use strict';

app.controller('NewPinCtrl', function($scope, PinsFactory, BoardsFactory, AuthFactory, $window){
console.log("newPinCtrlRunning: ");

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

	$scope.addNewPin = function(){
		console.log('$scope.newUserPin', $scope.newUserPin);
		PinsFactory.postNewPin($scope.newUserPin)
		.then((response) => {
			// console.log("response = ", response);
			$window.location.url = '#/';
			$scope.$apply();
		});
	};
});