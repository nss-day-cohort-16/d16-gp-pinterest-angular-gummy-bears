'use strict';

app.factory('PinsFactory', function($http, FBCreds){

	let getAllPins = () => {
		let pinsArr = [];
		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/pins.json`)
			.success((data) => {
				Object.keys(data).forEach((fbKey) => {
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

	let postNewPin = (newPin) => {
		console.log('addNewPin is running', newPin);
		return new Promise((resolve, reject) => {
			$http.post(`${FBCreds.databaseURL}/pins.json`, angular.toJson(newPin))
			.success((data)=> {
				console.log("data from postNewPin",data );
				resolve(data);
			})
			.error ((error)=> {
				reject(error);

			});

		});
	};
	
	return {
		getAllPins,
		postNewPin
	};
	
});