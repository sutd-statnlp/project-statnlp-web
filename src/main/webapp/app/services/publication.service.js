(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('PublicationService', PublicationService);

    PublicationService.$inject = ['$resource','DataService'];

    function PublicationService($resource,DataService) {

        var resource =  $resource('', {}, {
            'getPublications': { method: 'GET', cache: true, url: DataService.getApiEndpoint('Publication', 'A1', 'L10') }
        });
        
        var service = {
            getPublications: resource.getPublications,
            getPublicationsByOthers: getPublicationsByOthers,
            getPublicationsByCombination: getPublicationsByCombination
        };

        function getPublicationsByOthers(publications) {
            var items = publications.split(',');
            var localResource = $resource('', {}, {
                'getPublications': {
                    method: 'GET',
                    cache: true,
                    url: DataService.getApiEndpointMultiRanges('Publication', 'A1', 'H1', 'Publication', items)
                }
            });
            return localResource;
        }

        function getPublicationsByCombination(arrayPublications) {
            var items = arrayPublications[0].split(',');
 
            for(var i = 1; i< arrayPublications.length; i++) {
                items = DataService.getCommonArray(arrayPublications[i].split(','),items);
            }
           
            var localResource = $resource('', {}, {
                'getPublications': {
                    method: 'GET',
                    cache: true,
                    url: DataService.getApiEndpointMultiRanges('Publication', 'A1', 'H1', 'Publication', items)
                }
            });
            return localResource;
        }

        return service;
    }
})();
