(function () {
    'use strict';

    angular
        .module('webApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$state', 'NewsService', 'DataUtils', 'ProjectService', 'AgencyService'];

    function HomeController($scope, $state, NewsService, DataUtils, ProjectService, AgencyService) {
        var vm = this;

        vm.news = [];
        vm.projects = [];
        vm.agencies = [];

        loadNews();
        loadProjects();
        loadAgencies();

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