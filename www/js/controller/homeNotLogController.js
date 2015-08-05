(function() {
    'use strict';

    angular.module('chatppl')
        .controller('homeNotLogCtrl',homeNotLogCtrl);

    function homeNotLogCtrl($scope, $state, $rootScope, userServices, mapServices, $cordovaOauth, $http){
        var vm = this;
        vm.user = {};
        vm.log = ''
        vm.fbLogin = fbLogin;
        vm.gplusLogin = gplusLogin;

        ////////////////
        function fbLogin(){
            $cordovaOauth.facebook("1599115983698949", ["public_profile","email","user_friends","user_hometown","user_photos","user_videos"]).then(function(result) {
                $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: result.access_token, fields: "id,name,gender,location,website,picture,email,relationship_status" }}).then(function(result) {
                    var userBreak = (result.data.name).split(" ");
                    var user = {}
                    user.first_name = userBreak[0];
                    user.last_name = userBreak[1];
                    user.email = result.data.email;
                    user.fb_id = result.data.id;
                    user.profilePic = result.data.picture.data.url;
                    user.key = 'fb';
                    if(result.data.gender) {
                        result.data.gender.toLowerCase() === 'male' ? user.gender = 'M' : user.gender = 'F';
                    } else {
                        user.gender = '';
                    }
                    mapServices.getUserCurrentLocation(function(res){
                        user.location = res
                        userServices.Fb(user)
                            .then(function(res){

                            });
                    })
                }, function(error) {
                    alert("There was a problem getting your profile.  Check the logs for details.");

                });
            }, function(error) {
                alert("There was a problem signing in!  See the console for logs");

            });
        }

        function gplusLogin(){
            $cordovaOauth.google("907619762737-5301hv4e45g897em3j3obkc5s9udu4uk.apps.googleusercontent.com", ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"]).then(function (result) {

                $http({
                    method: 'GET',
                    url: 'https://www.googleapis.com/plus/v1/people/me',
                    headers: {
                        'Authorization': 'Bearer '+result.access_token
                    }
                }).then(function(result) {
                    var userBreak = (result.data.displayName).split(" ");
                    var user = {}
                    user.first_name = userBreak[0];
                    user.last_name = userBreak[1];
                    user.email = result.data.emails[0].value;
                    user.gplus_id = result.data.id;
                    user.key = 'g+';
                    user.profilePic = result.data.image.url;
                    if(result.data.gender) {
                        result.data.gender.toLowerCase() === 'male' ? user.gender = 'M' : user.gender = 'F';
                    } else {
                        user.gender = '';
                    }

                    mapServices.getUserCurrentLocation(function(res){
                        user.location = res
                        userServices.gplus(user)
                            .then(function(res){

                            });
                    })
                }, function(error) {
                    alert("There was a problem getting your profile.  Check the logs for details.");

                });

            }, function (error) {
                alert("There was a problem signing in!  See the console for logs");
            });
        }
    }
})();