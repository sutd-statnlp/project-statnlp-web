(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('ProjectCategoryService', ProjectCategoryService);

    ProjectCategoryService.$inject = ['$resource', 'DataService'];

    function ProjectCategoryService($resource, DataService) {

        return $resource('', {}, {
            'getCategories': {
                method: 'GET',
                cache: true,
                url: DataService.getApiEndpoint('ProjectCategory', 'A1', 'L60')
            },
            'getLatestCategory': {
                method: 'GET',
                cache: true,
                url: DataService.getApiEndpoint('ProjectCategory', 'A1', 'L2')
            }
        });

    }
})();