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
            params: {
                category: null,
                tag: null
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
