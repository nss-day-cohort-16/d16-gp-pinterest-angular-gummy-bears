'use strict';

app.factory('BoardsFactory', function($http, FBCreds){
				let boardsArr = [];

	let getAllBoards = (fbKey) => {
		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/boards.json`)
			.success((boardsObj) => {
				Object.keys(boardsObj).forEach((key) => {
					let currentBoard = boardsObj[key];
					currentBoard.id = key;
					boardsArr.push(currentBoard);
				});
				// console.log('boardsArr', boardsArr);
				resolve(boardsArr);
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
	let getUserBoards = (userId) => {
		console.log('userId', userId);
		let userBoardsArr = [];
		return new Promise((resolve, reject)=> {
			$http.get(`${FBCreds.databaseURL}/boards.json?orderBy="uid"&equalTo="${userId}"`)
			.success((userBoards) => {
				Object.keys(userBoards).forEach((fbKey) => {
					userBoards[fbKey].id = fbKey;
					userBoardsArr.push(userBoards[fbKey]);
				});
				// console.log('userBoardsArr', userBoardsArr);
				resolve(userBoardsArr);
			});
		});
	};

	let deleteBoards = (boardId) => {
		console.log("boardId", boardId);
		return new Promise((resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/boards/${boardId}.json`)
			.success((obj)=> {
				resolve(obj);
				$scope.apply();
			})
			.error((error)=> {
				reject(error);
			})
			});
	};
	

	return { getAllBoards, getSingleBoard, postNewBoard, getUserBoards, deleteBoards };

});