(function () {
    'use strict';

    angular
        .module('webApp')
        .controller('DatasetController', DatasetController);

    DatasetController.$inject = ['$scope', '$state', 'DatasetService','DataUtils'];

    function DatasetController($scope, $state, DatasetService,DataUtils) {
        var vm = this;
        vm.datasets = [];
        vm.promise = {};

        loadDatasets();

        function loadDatasets() {
            vm.promise = DatasetService.getDatasets({}, onSuccess, onError);

            function onSuccess(data) {
                vm.datasets = DataUtils.getArrayDataFromSheet(data);
            }

            function onError(error) {
                console.log(error);
            }
        }
    }
})();
