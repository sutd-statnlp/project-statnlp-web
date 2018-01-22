(function () {
    'use strict';

    angular
        .module('webApp')
        .controller('NewsController', NewsController);

    NewsController.$inject = ['$scope', '$state', '$stateParams', 'NewsService', 'DataUtils', 'TagService', 'NewsCategoryService'];

    function NewsController($scope, $state, $stateParams, NewsService, DataUtils, TagService, NewsCategoryService) {
        var vm = this;
        vm.news = [];
        vm.promise = {};
        vm.category = $stateParams.category;
        vm.tag = $stateParams.tag;

        loadNews();
        loadCategories();
        loadTags();

        function loadNews() {
            if (vm.category && vm.tag) {
                vm.promise = NewsService.getNewsByCategoryAndTag(vm.category.news, vm.tag.news).getNews({}, onSuccessByCategoryOrTag, onError);
            } else {
                if (vm.category) {
                    vm.promise = NewsService.getNewsByCategoryOrTag(vm.category.news).getNews({}, onSuccessByCategoryOrTag, onError);
                }
                if (vm.tag) {
                    vm.promise = NewsService.getNewsByCategoryOrTag(vm.tag.news).getNews({}, onSuccessByCategoryOrTag, onError);
                }
            }
            if (!vm.tag && !vm.category) {
                vm.promise = NewsService.getNews({}, onSuccess, onError);
            }

            function onSuccess(data) {
                vm.news = DataUtils.getArrayDataFromSheet(data);
            }

            function onSuccessByCategoryOrTag(data) {
                vm.news = DataUtils.getArrayFromSheetMultiRanges(data);
            }
        }


        function loadTags() {
            vm.promise = TagService.getTags({}, onSuccess, onError);

            function onSuccess(data) {
                vm.tags = DataUtils.getArrayDataFromSheet(data);
            }
        }

        function loadCategories() {
            vm.promise = NewsCategoryService.getCategories({}, onSuccess, onError);

            function onSuccess(data) {
                vm.categories = DataUtils.getArrayDataFromSheet(data);
            }
        }


        function onError(error) {
            console.log(error);
        }
    }
})();