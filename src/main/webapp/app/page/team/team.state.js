(function() {
    'use strict';

    angular
        .module('webApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('team', {
            parent: 'page',
            url: '/team',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/page/team/team.html',
                    controller: 'TeamController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
