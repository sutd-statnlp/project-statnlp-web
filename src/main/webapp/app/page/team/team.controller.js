(function () {
    'use strict';

    angular
        .module('webApp')
        .controller('TeamController', TeamController);

    TeamController.$inject = ['$scope', '$state', 'TeamService','DataUtils'];

    function TeamController($scope, $state, TeamService,DataUtils) {
        var vm = this;
        vm.teamMembers = [];
        vm.promise = {};

        loadTeamMembers();

        function loadTeamMembers() {
            vm.promise = TeamService.getMembers({}, onSuccess, onError);

            function onSuccess(data) {
                vm.teamMembers = DataUtils.getArrayDataFromSheet(data);
            }

            function onError(error) {
                console.log(error);
            }
        }
    }
})();
