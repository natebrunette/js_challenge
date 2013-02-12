'use strict';

// Declare app level module which depends on filters, and services
angular.module('jschallenge', ['jsChallengeGamesService']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: GamesCtrl});
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
