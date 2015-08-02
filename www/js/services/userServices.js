/**
 * Created by muddassir on 12/7/15.
 */
(function() {
    'use strict';
    angular.module('chatppl')
        .factory('userServices', userServices)

    function userServices($rootScope, dataServices){


        var service = {
            registerUser: registerUser,
            loginUser: loginUser,
            loginFb: loginFb,
            logingplus: logingplus
        };
        return service;

        /////////

        function registerUser(userData){
            dataServices.registerUser(userData).then(function(res){
              return res;
            })

        }

        function loginUser(userData){
            console.log(userData)
        }

        function loginFb(userData){
            console.log(userData)
            
        }

        function logingplus(userData){
            console.log(userData)

        }
    }
})();