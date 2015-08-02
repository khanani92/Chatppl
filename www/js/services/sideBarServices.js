(function() {
    'use strict';
    angular.module('sidebar.services',[]).factory('sidebar',sidebar);

    function sidebar($rootScope){
        var getnav = function(key){
            if( key=='U'){
                $rootScope.HomeUser = true;
                $rootScope.HomeAdmin = false;
                $rootScope.notLog = false;
            }
            else if(key =='A'){
                $rootScope.HomeUser = false;
                $rootScope.HomeAdmin = true;
                $rootScope.notLog = false;
            }
            else{
                $rootScope.HomeUser = false;
                $rootScope.HomeAdmin = false;
                $rootScope.notLog = true;

            }
        };

        return {
            getnav:getnav
        }
    }
})();