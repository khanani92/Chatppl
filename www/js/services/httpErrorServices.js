/**
 * Created by muddassir on 10/8/15.
 */
(function() {
    'use strict';
    angular.module('chatppl')
        .factory('httpErrorServices', httpErrorServices);


    function httpErrorServices($rootScope,$cordovaToast){

        var service = {
            checkResponse: checkResponse
        };
        return service;

        /////////


        function checkResponse(status,rmessage,callback){
            var message,
                duration = 'short',
                position = 'center',
                needChange;
            if(status === 400){
                message =  rmessage;
                needChange = false;
            }else if(status === 200){
                message = rmessage;
                needChange = false;
            }else if(status === 201){
                message = rmessage;
                needChange = true;
            }else if(status === 202){
                message =rmessage;
                needChange = true;
            }else if(status === 204){
                message = rmessage;
                needChange = false;
            }
            createToast(message, duration, position, needChange, callback)
        }

        function createToast(message, duration, position,needChange,callback){
            $cordovaToast
                .show(message, duration, position)
                .then(function(success) {
                    // success
                    callback(needChange)
                }, function (error) {
                    // error
                });
        }
    }
})();