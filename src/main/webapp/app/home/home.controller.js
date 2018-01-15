(function () {
    'use strict';

    angular
        .module('webApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$state', 'NewsService', 'DataUtils', 'ProjectService'];

    function HomeController($scope, $state, NewsService, DataUtils, ProjectService) {
        var vm = this;

        vm.news = [];
        vm.projects = [];

        loadNews();
        loadProjects();

        function loadNews() {
            NewsService.getHotNews({}, onSuccess, onError);

            function onSuccess(data) {
                vm.news = DataUtils.getArrayDataFromSheet(data);
            }
        }


        function loadProjects() {
            ProjectService.getLatestProjects({}, onSuccess, onError);

            function onSuccess(data) {
                vm.projects = DataUtils.getArrayDataFromSheet(data);
            }
        }

        function onError(error) {
            console.log(error);
        }

       
    }
})();
