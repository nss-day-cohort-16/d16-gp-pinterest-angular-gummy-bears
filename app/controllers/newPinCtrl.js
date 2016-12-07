'use strict';

app.controller('NewPinCtrl', function($scope, PinsFactory, BoardsFactory){ 
	$scope.userBoards = []; // will use boards factory to get user boards?
	$scope.allBoards = BoardsFactory.getAllBoards()
	.then(function(whatIsThis){
		console.log('whatIsThis', whatIsThis);
	});
});