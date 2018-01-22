(function() {
    'use strict';

    angular
        .module('webApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('news-detail', {
            parent: 'page',
            url: '/news/{endStart}/{id}',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/page/news/news-detail/news-detail.html',
                    controller: 'NewsDetailController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
