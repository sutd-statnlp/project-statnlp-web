(function() {
    'use strict';

    angular
        .module('webApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('project', {
            parent: 'page',
            url: '/project',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/page/project/project.html',
                    controller: 'ProjectController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
