(function() {
    'use strict';

    angular
        .module('webApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('dataset', {
            parent: 'page',
            url: '/dataset',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/page/dataset/dataset.html',
                    controller: 'DatasetController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
