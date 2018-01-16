(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('NewsService', NewsService);

    NewsService.$inject = ['$resource','DataService'];

    function NewsService($resource,DataService) {

        return $resource('', {}, {
            'getHotNews': { method: 'GET', cache: true, url: DataService.getApiEndpoint('News', 'A1', 'H5') },
            'getNews': { method: 'GET', cache: true, url: DataService.getApiEndpoint('News', 'A1', 'H12') }
        });

    }
})();
