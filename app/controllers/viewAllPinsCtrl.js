'use strict';

app.controller('ViewAllCtrl', function($scope, PinsStorage){

	PinsStorage.getAllPins()
	.then((data) => {
		$scope.pins = data;
		$scope.$apply();
	});

});