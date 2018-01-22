(function () {
    'use strict';

    angular
        .module('webApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$state', 'NewsService', 'NewsCategoryService', 'DataUtils', 'ProjectService', 'ProjectCategoryService', 'AgencyService'];

    function HomeController($scope, $state, NewsService, NewsCategoryService, DataUtils, ProjectService, ProjectCategoryService, AgencyService) {
        var vm = this;

        vm.news = [];
        vm.projects = [];
        vm.agencies = [];

        loadNews();
        loadProjects();
        loadAgencies();

        function loadNews() {
            NewsCategoryService.getHotCategory({}, onSuccess, onError);

            function onSuccess(data) {
                var hotCategory = DataUtils.getArrayDataFromSheet(data)[0];
                NewsService.getNewsByCategoryOrTag(hotCategory.news).getNews({}, onSuccess, onError);

                function onSuccess(data) {
                    vm.news = DataUtils.getArrayFromSheetMultiRanges(data);
                }
            }

        }


        function loadProjects() {
            ProjectCategoryService.getLatestCategory({}, onSuccess, onError);

            function onSuccess(data) {
                var latestCategory = DataUtils.getArrayDataFromSheet(data)[0];
                ProjectService.getProjectsByCategoryOrTag(latestCategory.projects).getProjects({}, onSuccess, onError);

                function onSuccess(data) {
                    vm.projects = DataUtils.getArrayFromSheetMultiRanges(data);
                }
            }

        }

        function loadAgencies() {
            AgencyService.getAgencies({}, onSuccess, onError);

            function onSuccess(data) {
                vm.agencies = DataUtils.getArrayDataFromSheet(data);
            }
        }

        function onError(error) {
            console.log(error);
        }


    }
})();