'use strict';

app.factory('BoardsFactory', function($http, FBCreds){
	
	let getAllBoards = (fbKey) => {
		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/boards.json`)
			.success((boardsObj) => {
				Object.keys(boardsObj).forEach((key) => {
					let currentBoard = boardsObj[key];
					currentBoard.id = key;
				});
				console.log('boardsObj', boardsObj);
				resolve(boardsObj);
			});
		});
	};

	let getSingleBoard = (boardId) => {
		console.log('getSingleBoard(boardId)', boardId);
	};

	let postNewBoard = (newBoard) => {
		return new Promise((resolve, reject) => {
			$http.post(`${FBCreds.databaseURL}/boards.json`, angular.toJson(newBoard))
			.success((obj) => {
 				getAllBoards(obj);
 				resolve(obj);
			})
			.error((error) => {
				reject(error);
			});

		});
	};

	return { getAllBoards, getSingleBoard, postNewBoard };

});