(function() {
    'use strict';

    angular.module('chatppl')
        .controller('homeUserLogCtrl',homeUserLogCtrl);

    function homeUserLogCtrl($scope, $state, $rootScope, leafletData, mapServices){
        var vm = this;
        var sh = $(window).height();
        vm.mapHeigth = sh*0.67
        vm.zoom = 24;

    }
})();