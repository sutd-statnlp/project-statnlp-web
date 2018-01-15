(function () {
    'use strict';

    angular
        .module('webApp')
        .controller('TutorialController', TutorialController);

    TutorialController.$inject = ['$scope', '$state', 'TutorialService','DataUtils'];

    function TutorialController($scope, $state, TutorialService,DataUtils) {
        var vm = this;
        vm.tutorials = [];

        loadTutorials();

        function loadTutorials() {
            TutorialService.getTutorials({}, onSuccess, onError);

            function onSuccess(data) {
                vm.tutorials = DataUtils.getArrayDataFromSheet(data);
            }

            function onError(error) {
                console.log(error);
            }
        }
    }
})();
