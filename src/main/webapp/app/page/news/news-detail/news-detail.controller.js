(function () {
    'use strict';

    angular
        .module('webApp')
        .controller('NewsDetailController', NewsDetailController);

    NewsDetailController.$inject = ['$scope', '$state', '$stateParams', 'DataUtils', 'NewsService'];

    function NewsDetailController($scope, $state, $stateParams, DataUtils, NewsService) {
        var vm = this;
        vm.news = {};

        vm.promise = {};
        vm.relatedNews = [];


        loadNews();
       

        function loadNews() {
            vm.promise = NewsService.getOneNewsByRange($stateParams.endStart).getOneNews({}, onSuccess, onError);

            function onSuccess(data) {
                vm.news = DataUtils.getOneObjectFromSheet(data);
                loadRelatedNews(vm.news.relatedNews);
            }
        }

       
        function loadRelatedNews(items) {
            vm.promise = NewsService.getRelatedNewsByRanges(items).getRelatedNews({}, onSuccess, onError);

            function onSuccess(data) {
                vm.relatedNews = DataUtils.getArrayFromSheetMultiRanges(data);
            }
        }


        function onError(error) {
            console.log(error);
        }

    }
})();