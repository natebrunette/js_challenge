'use strict';

/* Controllers */
function GamesListCtrl($scope, Game) {
    $scope.games = Game.getGames();

    $scope.addVote = function (voteId) {
        Game.addVote({id: voteId});
    };
}

