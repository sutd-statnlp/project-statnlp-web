(function () {
    'use strict';

    angular
        .module('webApp')
        .controller('PublicationController', PublicationController);

    PublicationController.$inject = ['$scope', '$state', 'PublicationService','DataUtils'];

    function PublicationController($scope, $state, PublicationService,DataUtils) {
        var vm = this;
        vm.publications = [];
        vm.promise = {};

        loadPublications();

        function loadPublications() {
            vm.promise = PublicationService.getPublications({}, onSuccess, onError);

            function onSuccess(data) {
                vm.publications = DataUtils.getArrayDataFromSheet(data);
            }

            function onError(error) {
                console.log(error);
            }
        }
    }
})();
