(function() {
    'use strict';
    angular.module('chatppl')
        .controller('userMessageCtrl', userMessageCtrl);
    
    function userMessageCtrl($scope, $state,$rootScope){
        var vm = this;
        vm.isSearchBarOpen = false;
        vm.showSearchBar = showSearchBar;

        /////////////
        function showSearchBar(){
            vm.isSearchBarOpen = !vm.isSearchBarOpen;
        }
    }
})();
