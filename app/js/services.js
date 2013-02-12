'use strict';

/* Services */
angular.module('jsChallengeGamesService', ['ngResource']).
    factory('Game', function ($resource) {
        return $resource(
            'http://js.nrd.mn/challenge/:action',
            {
                apiKey: '67a290080f4fee82f5dd4371d43bfa46',
                action: '@action',
                callback: 'JSON_CALLBACK'
            },
            {
                getGames: {
                    method: 'JSONP',
                    params: {
                        action: 'getGames'
                    },
                    isArray: true
                },
                addVote: {
                    method: 'JSONP',
                    params: {
                        action: 'addVote'
                    }
                },
                addGame: {
                    method: 'JSONP',
                    params: {
                        action: 'addGame'
                    }
                }
            }
        );
    });
