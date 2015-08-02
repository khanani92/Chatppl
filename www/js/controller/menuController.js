(function() {
    'use strict';

    angular.module('chatppl')
        .controller('menuCtrl', menuCtrl);

    function menuCtrl($scope, $state,$rootScope,sidebar){
        var vm = this;
        sidebar.getnav('U')
    }
})();