(function() {
    'use strict';

    angular
        .module('webApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('news', {
            parent: 'page',
            url: '/news',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/page/news/news.html',
                    controller: 'NewsController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
