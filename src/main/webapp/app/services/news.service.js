(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('NewsService', NewsService);

    NewsService.$inject = ['$resource', 'DataService'];

    function NewsService($resource, DataService) {

        var resource = $resource('', {}, {
            'getHotNews': {
                method: 'GET',
                cache: true,
                url: DataService.getApiEndpoint('News', 'A1', 'H5')
            },
            'getNews': {
                method: 'GET',
                cache: true,
                url: DataService.getApiEndpoint('News', 'A1', 'H12')
            }
        });

        var service = {
            getHotNews: resource.getHotNews,
            getNews: resource.getNews,
            getNewsWithStartEnd: getNewsWithStartEnd
        };
        return service;

        function getNewsWithStartEnd(start, end) {
            var localResource = $resource('', {}, {
                'getNews': {
                    method: 'GET',
                    cache: true,
                    url: DataService.getApiEndpoint('News', 'A' + start, 'H' + end)
                }
            });
            return localResource;
        }
    }
})();