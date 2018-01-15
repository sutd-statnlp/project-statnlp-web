(function() {
    'use strict';

    angular
        .module('webApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('tutorial', {
            parent: 'page',
            url: '/tutorial',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/page/tutorial/tutorial.html',
                    controller: 'TutorialController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
