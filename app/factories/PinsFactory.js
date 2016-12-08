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
		return new Promise((resolve, reject) => {
			$http.post(`${FBCreds.databaseURL}/pins.json`, angular.toJson(newPin))
			.success((data)=> {
				// console.log("data from postNewPin",data );
				resolve(data);
			})
			.error ((error)=> {
				reject(error);
			});

		});
	};

	let getAllBoardPins = (boardId) => {
		console.log('getAllBoardPins', boardId);
		let boardPinsArr = [];
		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/pins.json`)
				// ?orderBy="boardid"&equalTo="${boardId}"`)
			.success((boardPins) => {
				console.log('boardPins', boardPins);
				Object.keys(boardPins).forEach((fbKey) => {
					boardPins[fbKey].id = fbKey;
				// 	// console.log("what is board pins", boardPins);
					boardPinsArr.push(boardPins[fbKey]);
				});
				// console.log("board pins in get all board pins", boardPins);
				resolve(boardPinsArr);
			});
		});
	};

	return {
		getAllPins,
		postNewPin,
		getAllBoardPins
	};

});