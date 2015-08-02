(function() {
    'use strict';

    angular.module('chatppl')
        .controller('homeNotLogCtrl',homeNotLogCtrl);

    function homeNotLogCtrl($scope, $state, $rootScope, userServices, mapServices){
        var vm = this;
        vm.user = {};

        vm.fbLogin = fbLogin;
        vm.gplusLogin = gplusLogin;

        ////////////////
        function fbLogin(){
            FB.login(function (response) {
                if (response.authResponse) {
                    getUserInfo();
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            }, {scope: 'public_profile,email,user_friends,user_hometown,user_photos,user_videos'});

            function getUserInfo() {
                // get basic info
                FB.api('/me', function (response) {
                    // get profile picture
                    FB.api('/me/picture?type=normal', function (picResponse) {

                        var userBreak = (response.name).split(" ");
                        var user = {}
                        user.firstName = userBreak[0];
                        user.lastName = userBreak[1];
                        user.email = response.email;
                        user.fbID = response.id;
                        user.profilePic = picResponse.data.url;
                        if(response.gender) {
                            response.gender.toString().toLowerCase() === 'male' ? user.gender = 'M' : user.gender = 'F';
                        } else {
                            user.gender = '';
                        }
                        //mapServices.getUserCurrentLocation(function(res){
                        //    user.location = res
                        //    userServices.loginFb(user)
                        //        .then(function(res){
                        //
                        //        });
                        //})

                        //$state.go('dashboard');  //send user to not logedIN home page

                    });
                });
            }
        }

        function gplusLogin(){
            var myParams = {
                // Replace client id with yours
                'clientid': '907619762737-5301hv4e45g897em3j3obkc5s9udu4uk.apps.googleusercontent.com',
                'cookiepolicy': 'single_host_origin',
                'callback': loginCallback,
                'approvalprompt': 'force',
                'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
            };
            gapi.auth.signIn(myParams);

            function loginCallback(result) {
                if (result['status']['signed_in']) {
                    var request = gapi.client.plus.people.get({'userId': 'me'});
                    request.execute(function (resp) {
                        //console.log('Google+ Login RESPONSE: ' + angular.toJson(resp));
                        var userEmail;
                        if (resp['emails']) {
                            for (var i = 0; i < resp['emails'].length; i++) {
                                if (resp['emails'][i]['type'] == 'account') {
                                    userEmail = resp['emails'][i]['value'];
                                }
                            }
                        }
                        // store data to DB
                        var user = {};
                        var userBreak = (resp.displayName).split(" ");
                        user.firstName = userBreak[0];
                        user.lastName = userBreak[1];
                        user.email = userEmail;
                        user.gplusID = resp.id;
                        if(resp.gender) {
                            resp.gender.toString().toLowerCase() === 'male' ? user.gender = 'M' : user.gender = 'F';
                        } else {
                            user.gender = '';
                        }
                        user.profilePic = resp.image.url;
                        //mapServices.getUserCurrentLocation(function(res){
                        //    user.location = res
                        //    userServices.logingplus(user)
                        //        .then(function(res){
                        //
                        //        });
                        //})
                        
                        //$state.go('dashboard');
                    });
                }
            }
        }
    }
})();