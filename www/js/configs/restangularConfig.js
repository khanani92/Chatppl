/**
 * @ngdoc overview
 * @name app.core
 * @description Configuration block for restangular
 */

(function(){

    'use strict';

    angular.module('chatppl')
        .config(configuration)
        .run(interceptor);

    /* @ngInject */
    function configuration(RestangularProvider){
        var url = "http://localhost:8080";
        var baseUrl = url + '/api'
        RestangularProvider.setBaseUrl(baseUrl);
        RestangularProvider.setResponseExtractor(function(response, operation){
            var mutatedResponse;
            //getList expects the repsonse to be a list hence the mutation
            if(operation === 'getList'){
                mutatedResponse = response.data;
                mutatedResponse.meta = response.meta;
                response = mutatedResponse;
            }
            return response;
        });

    }

    function interceptor(Restangular, lodash){
        Restangular.setFullRequestInterceptor(function(element, operation, route, url, headers){
            var userId = localStorage.getItem('userId');
            var auth = 'Your API key';
            return {
                headers: lodash.extend(headers, {'apikey': auth})
            };
        });
    }

}());
