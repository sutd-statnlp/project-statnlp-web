(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('PublicationCategoryService', PublicationCategoryService);

    PublicationCategoryService.$inject = ['$resource', 'DataService'];

    function PublicationCategoryService($resource, DataService) {

        return $resource('', {}, {
            'getCategories': {
                method: 'GET',
                cache: true,
                url: DataService.getApiEndpoint('PublicationCategory', 'A1', 'H10')
            }
        });

    }
})();