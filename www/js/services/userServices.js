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

        function register(userData){
            dataServices.registerUser(userData).then(function(res){
              return res;
            });
        }

        function login(userData){
            dataServices.loginUser(userData).then(function(res){
                return res;
            })
        }

        function Fb(userData){
            dataServices.socialLogin(userData).then(function(res){
                return res;
            });
        }

        function gplus(userData){
            dataServices.socialLogin(userData).then(function(res){
                return res;
            })

        }
    }
})();