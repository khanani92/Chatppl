(function() {
    'use strict';

    angular.module('chatppl')
        .controller('LoginCtrl',LoginCtrl);

    function LoginCtrl($scope, $state, $rootScope, mapServices, userServices,$cordovaContacts, $q){
        var vm = this;
        vm.phoneContacts = [];

        vm.login = login;
        vm.register = register;
        vm.saveNumber = saveNumber;
        vm.exportContact = exportContact;

        /////////////////

        function login(){

            mapServices.getUserCurrentLocation(function(res){
                vm.user.location = res;
                $q.when(userServices.loginUser(vm.user)).then(function(res){
                    console.log(res)
                })

            })
        }

        function register(){

            mapServices.getUserCurrentLocation(function(res){
                vm.user.location = res;
                userServices.registerUser(vm.user).then(function(res){

                    });
            })
        }

        function saveNumber(){

        }

        function exportContact(){

            function onSuccess(contacts) {
                for (var i = 0; i < contacts.length; i++) {
                    var contact = {};
                    if(contacts[i].phoneNumbers != null){
                        contact.displayName = contacts[i].displayName;
                        contact.emails = contacts[i].emails;
                        contact.photos = contacts[i].photos;//{type:contacts[i].photos[0].type,value:contacts[i].photos[0].value};
                        contact.phoneNumbers = [];
                        (contacts[i].phoneNumbers).forEach(function(ph){
                            contact.phoneNumbers.push({type:ph.type,value:ph.value})
                        })
                    }
                }
                console.log(vm.phoneContacts)
            };
            function onError(contactError) {
                alert(contactError);
            };
            var options = {};
            options.multiple = true;
            $cordovaContacts.find(options).then(onSuccess, onError);
        }



    }
})();


//displayName
//phoneNumbers(array) {type,value}
//addresses,birthday,emails,photos