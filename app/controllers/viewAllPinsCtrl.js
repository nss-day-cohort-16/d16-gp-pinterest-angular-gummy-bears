'use strict';

app.controller('ViewAllCtrl', function($scope, PinsFactory){

	PinsFactory.getAllPins()
	.then((data) => {
		$scope.pins = data;
		$scope.$apply();
	});

});