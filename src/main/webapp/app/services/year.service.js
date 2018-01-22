(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('YearService', YearService);

    YearService.$inject = ['$resource','DataService'];

    function YearService($resource,DataService) {

        return $resource('', {}, {
            'getYears': { method: 'GET', cache: true, url: DataService.getApiEndpoint('Year', 'A1', 'L60') }
        });

    }
})();
