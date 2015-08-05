/**
 * Created by muddassir on 27/7/15.
 */
(function() {
    'use strict';
    angular.module('chatppl')
        .factory('dataServices', dataServices);


    function dataServices($rootScope, Restangular){

        var service = {
            registerUser: registerUser,
            loginUser: loginUser,
            socialLogin: socialLogin
        };
        return service;

        /////////




        function registerUser(userData){
            return Restangular.all('user').post({userData : userData});
        }

        function loginUser(userData){
            return Restangular.all('login').post({userData : userData});
        }

        function socialLogin(userData){
            return Restangular.all('socialLogin').post({userData : userData});
        }

    }
})();