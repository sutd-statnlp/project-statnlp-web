(function () {
    'use strict';

    angular
        .module('webApp')
        .controller('NewsController', NewsController);

    NewsController.$inject = ['$scope', '$state', 'NewsService','DataUtils'];

    function NewsController($scope, $state, NewsService,DataUtils) {
        var vm = this;
        vm.news = [];
        vm.promise = {};

        loadNews();

        function loadNews() {
            vm.promise = NewsService.getNews({}, onSuccess, onError);

            function onSuccess(data) {
                vm.news = DataUtils.getArrayDataFromSheet(data);
            }

            function onError(error) {
                console.log(error);
            }
        }
    }
})();
