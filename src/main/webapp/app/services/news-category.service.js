(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('NewsCategoryService', NewsCategoryService);

    NewsCategoryService.$inject = ['$resource','DataService'];

    function NewsCategoryService($resource,DataService) {

        return $resource('', {}, {
            'getCategories': { method: 'GET', cache: true, url: DataService.getApiEndpoint('NewsCategory', 'A1', 'H10') }
        });

    }
})();
