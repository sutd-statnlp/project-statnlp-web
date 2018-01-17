(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('CategoryService', CategoryService);

    CategoryService.$inject = ['$resource','DataService'];

    function CategoryService($resource,DataService) {

        return $resource('', {}, {
            'getCategories': { method: 'GET', cache: true, url: DataService.getApiEndpoint('Category', 'A1', 'H10') }
        });

    }
})();
