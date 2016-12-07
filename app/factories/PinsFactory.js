'use strict';

app.factory('PinsFactory', function($http, FBCreds){

	let getAllPins = () => {
		let pinsArr = [];
		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/pins.json`)
			.success((data) => {
				console.log('data', data);
				Object.keys(data).forEach((fbKey) => {
					console.log('fbKey', fbKey);
					let pinObj = data[fbKey];
					pinObj.id = fbKey;
					pinsArr.push(pinObj);
				});

				resolve(pinsArr);
			})
			.error((error) => {
				reject(error);
			});

		});
	};

	let addNewPin = (newPin) => {
		console.log('addNewPin is running');
	};
	
	return {
		getAllPins,
		addNewPin
	};
	
});