'use strict';

/* Controllers */
function GamesCtrl($scope, Game) {

    $scope.addVote = function (gameId) {
        Game.addVote({id: gameId});
    };

    $scope.addGame = function (gameName) {
        Game.addGame({title: gameName});
    };

    $scope.markOwned = function (gameId) {
        Game.markOwned({id: gameId});
    };

    $scope.clearGames = function () {
        Game.clearGames();
    };

    $scope.games = Game.getGames({callback: 'JSON_CALLBACK'});
}

function serviceCallback (data) {
    console.log(data);
}

