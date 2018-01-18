(function () {
    'use strict';

    angular
        .module('webApp')
        .controller('NewsDetailController', NewsDetailController);

    NewsDetailController.$inject = ['$scope', '$state', 'entity','DataUtils','TagService','NewsCategoryService','NewsService'];

    function NewsDetailController($scope, $state, entity,DataUtils,TagService,NewsCategoryService,NewsService) {
        var vm = this;
        vm.news = entity;
        vm.promise = {};
        vm.relatedNews = [];

        loadCategories();
        loadTags();
        loadRelatedNews();

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

        function loadRelatedNews() {
            vm.promise = NewsService.getNews({}, onSuccess, onError);

            function onSuccess(data) {
                vm.relatedNews = DataUtils.getArrayDataFromSheet(data).splice(1,4);
            }
        }


        function onError(error) {
            console.log(error);
        }
       
    }
})();
