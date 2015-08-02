/**
 * Created by muddassir on 18/7/15.
 */
(function() {
    'use strict';

    angular.module('chatppl')
        .directive('mapDirective',mapDirective);

    function mapDirective($state, leafletData, mapServices){
        var vm = this;
        return {
            restrict: 'EA',
            scope: {
                height : '@',
                mapData : '=',
                zoom: '@'
            },
            template: '<div style="padding-top: 1%;" ng-style="{height:height}" id="map"> </div>',
            link: function(scope, iElement, iAttrs) {
                mapServices.getUserCurrentLocation(function(res){
                    var  mapHeight = iAttrs.height || 350 ;
                    var  mapData = iAttrs.mapData || res;
                    var  zoom = (iAttrs.zoom*0.5) || 13;
                    //console.log(zoom)
                    var currentMap = '';
                    mapServices.create(mapData,zoom,function(map){
                        currentMap = map ;
                    });
                    scope.$watch('zoom', function(newVal) {
                        currentMap.setZoom(newVal*0.5)
                    })
                })

                // get weather details
            }
        }

            //<div map-Directive height="San Francisco" map-data=""></div>


        //mapServices.create();

        //vm.test = function(){
        //    mapServices.getUserCurrentLocation(function(res){
        //       console.log(res)
        //   })
        //
        //}

    }
})();
