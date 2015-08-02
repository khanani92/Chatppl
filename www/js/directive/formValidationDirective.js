/**
 * Created by muddassir on 19/7/15.
 */

(function() {
    'use strict';
    angular.module('chatppl')
        .directive('match', match);

    function match(){
        return {
            require: 'ngModel',
            restrict: 'A',
            scope: {
                match: '='
            },
            link: function(scope, elem, attrs, ctrl) {
                scope.$watch(function() {
                    var modelValue = ctrl.$modelValue || ctrl.$$invalidModelValue;
                    return (ctrl.$pristine && angular.isUndefined(modelValue)) || scope.match === modelValue;
                }, function(currentValue) {
                    ctrl.$setValidity('match', currentValue);
                });
            }
        };
    }
})();
