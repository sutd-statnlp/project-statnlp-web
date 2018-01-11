(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('ProjectService', ProjectService);

    ProjectService.$inject = ['$resource','DataService'];

    function ProjectService($resource,DataService) {

        return $resource('', {}, {
            'getLatestProjects': { method: 'GET', url: DataService.getApiEndpoint('Project', 'A1', 'E5') }
        });

    }
})();
