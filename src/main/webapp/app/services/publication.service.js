(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('PublicationService', PublicationService);

    PublicationService.$inject = ['$resource','DataService'];

    function PublicationService($resource,DataService) {

        return $resource('', {}, {
            'getPublications': { method: 'GET', cache: true, url: DataService.getApiEndpoint('Publication', 'A1', 'H10') }
        });

    }
})();
