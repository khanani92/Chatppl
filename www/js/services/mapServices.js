/**
 * Created by muddassir on 12/7/15.
 */
(function() {
    'use strict';
    angular.module('chatppl')
        .factory('mapServices', mapServices)

    function mapServices($rootScope, leafletData,$cordovaGeolocation){
        var map;
        var currentLoc = {};

        var service = {
            initialize: initialize,
            create: create,
            update: update,
            getUserCurrentLocation: getUserCurrentLocation

        };
        return service;

        /////////

        function initialize(){
            getUserLocation(function(res){
                currentLoc = res;
            });
        }

        function create(mapLocation,zoom,callback){
            var options = {center : new L.LatLng(mapLocation.lat,mapLocation.lng), zoom : zoom };
            var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                osm = new L.TileLayer(osmUrl, {maxZoom: 25, path:{weight: 10,opacity: 1}});
            var mapLayer = new L.TileLayer(osmUrl);
            map = new L.Map('map', options).addLayer(mapLayer);
           // map.locate();
            var maker = L.marker([mapLocation.lat, mapLocation.lng]).addTo(map);
            callback(map) ;
        }

        function update(){
             //map.locate()
            map.setView([currentLoc.lat, currentLoc.lng])
        }

        function getUserCurrentLocation(callback){
            getUserLocation(function(res){
                callback(res);;
            });
        }

        function getUserLocation(callback){
            var posOptions = {timeout: 10000, enableHighAccuracy: false};
            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function (position) {
                    var currentLoc = {};
                    currentLoc.lat  = position.coords.latitude;
                    currentLoc.lng = position.coords.longitude;
                    callback(currentLoc);
                }, function(err) {
                    // error
                    callback({error:'Unable to get your position!'});
                });
        }

    }
})();

//map.locate({setView : true, maxZoom: 15});

//var marker = L.marker([0, 0], {
//    icon: L.mapbox.marker.icon({
//        'marker-color': '#f86767'
//    }),
//    draggable: true
//}).addTo(map);

// marker.getLatLng();

//
