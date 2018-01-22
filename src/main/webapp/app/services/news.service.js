(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('NewsService', NewsService);

    NewsService.$inject = ['$resource', 'DataService'];

    function NewsService($resource, DataService) {

        var resource = $resource('', {}, {
            'getNews': {
                method: 'GET',
                cache: true,
                url: DataService.getApiEndpoint('News', 'A1', 'L60')
            }
        });

        var service = {
            getHotNews: resource.getHotNews,
            getNews: resource.getNews,
            getNewsWithStartEnd: getNewsWithStartEnd,
            getOneNewsByRange: getOneNewsByRange,
            getRelatedNewsByRanges: getRelatedNewsByRanges,
            getNewsByCategoryOrTag: getNewsByCategoryOrTag,
            getNewsByCategoryAndTag: getNewsByCategoryAndTag
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

        function getOneNewsByRange(endStart) {
            var localResource = $resource('', {}, {
                'getOneNews': {
                    method: 'GET',
                    cache: true,
                    url: DataService.getApiEndpointTwoRanges('News', 'A1', 'H1', 'News', 'A' + endStart, 'H' + endStart)
                }
            });
            return localResource;
        }

        function getRelatedNewsByRanges(relatedNews) {
            var items = relatedNews.split(',');
            var localResource = $resource('', {}, {
                'getRelatedNews': {
                    method: 'GET',
                    cache: true,
                    url: DataService.getApiEndpointMultiRanges('News', 'A1', 'H1', 'News', items)
                }
            });
            return localResource;
        }

        function getNewsByCategoryOrTag(newsByCategoryOrTag) {
            var items = newsByCategoryOrTag.split(',');
            var localResource = $resource('', {}, {
                'getNews': {
                    method: 'GET',
                    cache: true,
                    url: DataService.getApiEndpointMultiRanges('News', 'A1', 'H1', 'News', items)
                }
            });
            return localResource;
        }

        function getNewsByCategoryAndTag(newsByCategory, newsByTag) {
            var items = DataService.getCommonArray(newsByCategory.split(','),newsByTag.split(','));
            var localResource = $resource('', {}, {
                'getNews': {
                    method: 'GET',
                    cache: true,
                    url: DataService.getApiEndpointMultiRanges('News', 'A1', 'H1', 'News', items)
                }
            });
            return localResource;
        }

        

    }
})();
