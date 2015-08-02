/**
 * Created by muddassir on 29/6/15.
 */
(function() {
    'use strict';
    angular.module('chatppl')
        .controller('socketCtrl', socketCtrl);

    function socketCtrl($scope, $state,$rootScope,socketServices){
        var vm = this;
        vm.socket = socketServices.socket();
        vm.socket.on('connected',function(msg){
            //socket.id

            console.log(msg+vm.socket.id)
//        sessionStorage.setItem('sessionID',socket.socket.sessionid);
        });

        socketServices.on('error',function(msg){
            console.log(msg)
        })

        socketServices.on('reconnectSocket',function(msg){

            var userData =  JSON.parse(sessionStorage.getItem('userData'));
            if(userData && (Object.keys(userData).length > 0)){
                vm.socket= socketServices.socket()
                socketServices.emit('addMeToSocket',{userID:userID._id,socketID:vm.socket.socket.sessionid})
            }

        })

    }
})();