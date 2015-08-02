(function() {
    'use strict';
    angular.module('chatppl')
        .controller('friendListCtrl', friendListCtrl);


    function friendListCtrl($scope, $state,$rootScope,$ionicPopover){
        var vm = this;
        var template = '<style>.popover { height:150px;}</style><ion-popover-view><ion-header-bar> <h3 class="title txt_center" >Options</h3> </ion-header-bar> <ion-content> <div class="light"><li class="item">Online</li><li class="item">All</li></div></ion-content></ion-popover-view>';

        vm.isSearchBarOpen = false;
        vm.isfriendList = false;
        vm.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope

        });
        vm.showSearchBar = showSearchBar;
        vm.showAddFrnd = showAddFrnd;
        vm.openPopover = openPopover;


        //////////

        function showSearchBar(){
            vm.isSearchBarOpen = !vm.isSearchBarOpen;
        }

        function showAddFrnd(){
            vm.isfriendList = !vm.isfriendList;
            vm.isSearchBarOpen = false;
        }

        function openPopover($event){
            vm.popover.show($event);
        }
    }
})();
