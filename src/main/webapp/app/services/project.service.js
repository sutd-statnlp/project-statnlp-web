(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('ProjectService', ProjectService);

    ProjectService.$inject = ['$resource','DataService'];

    function ProjectService($resource,DataService) {

        var resource =  $resource('', {}, {
            'getProjects': { method: 'GET', cache: true, url: DataService.getApiEndpoint('Project', 'A1', 'L10') }
        });

        var service = {
            getProjects: resource.getProjects,
            getProjectsByCategoryOrTag: getProjectsByCategoryOrTag
        };
        return service;

        function getProjectsByCategoryOrTag(projectByCategoryOrTag) {
            var items = projectByCategoryOrTag.split(',');
            var localResource = $resource('', {}, {
                'getProjects': {
                    method: 'GET',
                    cache: true,
                    url: DataService.getApiEndpointMultiRanges('Project', 'A1', 'H1', 'Project', items)
                }
            });
            return localResource;
        }
    }
})();
