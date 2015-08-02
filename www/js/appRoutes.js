/**
 * Created by muddassir on 12/7/15.
 */
angular.module('chatppl')
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'menuCtrl as vm'
        })

        .state('app.login', {
            url: "/login",
            views: {
                'menuContent': {
                    templateUrl: "templates/login.html",
                    controller: 'LoginCtrl as vm'
                }
            }
        })
        .state('app.register', {
            url: "/register",
            views: {
                'menuContent': {
                    templateUrl: "templates/register.html",
                    controller: 'LoginCtrl as vm'
                }
            }
        })
        .state('app.phoneNumber', {
            url: "/userPhoneNumber",
            views: {
                'menuContent': {
                    templateUrl: "templates/userPhoneNumber.html",
                    controller: 'LoginCtrl as vm'
                }
            }
        })

        .state('app.homeNotLog', {
            url: "/homeNotLog",
            views: {
                'menuContent': {
                    templateUrl: "templates/homeNotLog.html",
                    controller: 'homeNotLogCtrl as vm'
                }
            }
        })
        ///////////////////////////////
        ////////////User Pages//////////


        .state('app.homeUser', {
            url: "/homeUser",
            views: {
                'menuContent': {
                    templateUrl: "templates/homeUser.html",
                    controller: 'homeUserLogCtrl as vm'
                }
            }
        })
        .state('app.friendList', {
            url: "/friendList",
            views: {
                'menuContent': {
                    templateUrl: "templates/friendList.html",
                    controller: 'friendListCtrl as vm'
                }
            }
        })
        .state('app.userMessage', {
            url: "/userMessage",
            views: {
                'menuContent': {
                    templateUrl: "templates/userMessage.html",
                    controller: 'userMessageCtrl as vm'
                }
            }
        })
        .state('app.userNotification', {
            url: "/userNotification",
            views: {
                'menuContent': {
                    templateUrl: "templates/userNotification.html",
                    controller: 'userNotificationCtrl as vm'
                }
            }
        })


        ////////////User Pages//////////
        ////////////////////////////////


        .state('app.single', {
            url: "/playlists/:playlistId",
            views: {
                'menuContent': {
                    templateUrl: "templates/login.html",
                    controller: 'PlaylistCtrl as vm'
                }
            }
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/homeNotLog');
});
