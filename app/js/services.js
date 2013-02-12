'use strict';

/* Services */
angular.module('jsChallengeGamesService', ['ngResource']).
    factory('Game', function ($resource) {
        return $resource(
            'http://js.nrd.mn/challenge/:action',
            {
                apiKey: '67a290080f4fee82f5dd4371d43bfa46',
                action: '@action',
                callback: 'serviceCallback'
            },
            {
                checkKey: {
                    method: 'JSONP',
                    params: { action: 'checkKey' }
                },
                getGames: {
                    method: 'JSONP',
                    params: { action: 'getGames' },
                    isArray: true
                },
                addVote: {
                    method: 'JSONP',
                    params: { action: 'addVote' }
                },
                addGame: {
                    method: 'JSONP',
                    params: { action: 'addGame' }
                },
                markOwned: {
                    method: 'JSONP',
                    params: { action: 'setGotIt' }
                },
                clearGames: {
                    method: 'JSONP',
                    params: { action: 'clearGames' }
                }
            }
        );
    });
