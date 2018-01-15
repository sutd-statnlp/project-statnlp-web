(function() {
    'use strict';

    angular
        .module('webApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('publication', {
            parent: 'page',
            url: '/publication',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/page/publication/publication.html',
                    controller: 'PublicationController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
