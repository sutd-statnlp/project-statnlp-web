(function () {
    'use strict';

    angular
        .module('webApp')
        .controller('TeamController', TeamController);

    TeamController.$inject = ['$scope', '$state', 'DataService','DataUtils'];

    function TeamController($scope, $state, DataService,DataUtils) {
        var vm = this;
        vm.teamMembers = [];

        loadTeamMembers();

        function loadTeamMembers() {
            DataService.getMembers({}, onSuccess, onError);

            function onSuccess(data) {
                vm.teamMembers = DataUtils.getArrayDataFromSheet(data);
            }

            function onError(error) {
                console.log(error);
            }
        }
    }
})();
