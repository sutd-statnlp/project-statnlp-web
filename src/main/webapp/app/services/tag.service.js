(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('TagService', TagService);

    TagService.$inject = ['$resource','DataService'];

    function TagService($resource,DataService) {

        return $resource('', {}, {
            'getTags': { method: 'GET', cache: true, url: DataService.getApiEndpoint('Tag', 'A1', 'H10') }
        });

    }
})();
