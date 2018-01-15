(function () {
    'use strict';

    angular
        .module('webApp')
        .controller('ProjectController', ProjectController);

    ProjectController.$inject = ['$scope', '$state', 'ProjectService','DataUtils'];

    function ProjectController($scope, $state, ProjectService,DataUtils) {
        var vm = this;
        vm.projects = [];
        vm.promise = {};

        loadProjects();

        function loadProjects() {
            vm.promise = ProjectService.getProjects({}, onSuccess, onError);

            function onSuccess(data) {
                vm.projects = DataUtils.getArrayDataFromSheet(data);
            }

            function onError(error) {
                console.log(error);
            }
        }
    }
})();
