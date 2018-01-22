(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('AgencyService', AgencyService);

    AgencyService.$inject = ['$resource','DataService'];

    function AgencyService($resource,DataService) {

        return $resource('', {}, {
            'getAgencies': { method: 'GET', cache: true, url: DataService.getApiEndpoint('Agency', 'A1', 'L60') }
        });

    }
})();
