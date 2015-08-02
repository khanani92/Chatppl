/**
 * Created by muddassir on 28/6/15.
 */
(function() {
    'use strict';
    angular.module('chatppl')
        .factory('socketServices', socketServices);

    function socketServices($rootScope){
        var socket;
        return {
            socketConnect:function(url){
                var socketID = sessionStorage.getItem('sessionID');
                var userData =  JSON.parse(sessionStorage.getItem('userData'));
                if(socketID && (userData && (Object.keys(userData).length > 0))){
                    // console.log("exist")
                    console.log(socketID)
                    //socket =io.connect("https://cpback.herokuapp.com//api")
                    socket =io.connect(url);
                    socket.emit('checkSocketConnetion',{socketID:socketID,userID:userData._id})
                }else{
                    console.log("not--exist")

                    //socket =io.connect("https://cpback.herokuapp.com//api");
                    socket =io(url);
                }
                $.support.cors=true;
                //$.mobile.allowCrossDomainPages = true;
                //$.mobile.pushStateEnabled      = false;

            },
            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function (eventName, data, callback) {
                socket.emit(eventName, data, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                })
            },
            socket:function(){
                return socket
            }
        };
    }
})();