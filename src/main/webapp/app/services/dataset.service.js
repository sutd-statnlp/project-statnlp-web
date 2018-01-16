(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('DatasetService', DatasetService);

    DatasetService.$inject = ['$resource','DataService'];

    function DatasetService($resource,DataService) {

        return $resource('', {}, {
            'getDatasets': { method: 'GET', cache: true, url: DataService.getApiEndpoint('Dataset', 'A1', 'H10') }
        });

    }
})();
