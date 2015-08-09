/**
 * Created by muddassir on 12/7/15.
 */
(function() {
    'use strict';
    angular.module('chatppl')
        .factory('userServices', userServices)

    function userServices($rootScope, dataServices){


        var service = {
            register: register,
            login: login,
            Fb: Fb,
            gplus: gplus
        };
        return service;

        /////////

        function register(userData,callback){
            dataServices.registerUser(userData).then(function(res){
                callback(res);
            });
        }

        function login(userData,callback){
            dataServices.loginUser(userData).then(function(res){
                callback(res);
            })
        }

        function Fb(userData,callback){
            dataServices.socialLogin(userData).then(function(res){
                callback(res);
            });
        }

        function gplus(userData,callback){
            dataServices.socialLogin(userData).then(function(res){
                callback(res);
            })

        }
    }
})();