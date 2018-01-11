(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('NewsService', NewsService);

    NewsService.$inject = ['$resource','DataService'];

    function NewsService($resource,DataService) {

        return $resource('', {}, {
            'getHotNews': { method: 'GET', url: DataService.getApiEndpoint('News', 'A1', 'E5') }
        });

    }
})();
