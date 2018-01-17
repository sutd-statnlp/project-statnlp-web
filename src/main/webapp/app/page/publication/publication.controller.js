(function () {
    'use strict';

    angular
        .module('webApp')
        .controller('PublicationController', PublicationController);

    PublicationController.$inject = ['$scope', '$state', 'PublicationService', 'DataUtils', 'CategoryService','TagService'];

    function PublicationController($scope, $state, PublicationService, DataUtils, CategoryService,TagService) {
        var vm = this;
        vm.publications = [];
        vm.promise = {};
        vm.categories = [];
        vm.tags = [];

        loadPublications();
        loadCategories();
        loadTags();

        function loadTags() {
            vm.promise = TagService.getTags({}, onSuccess, onError);

            function onSuccess(data) {
                vm.tags = DataUtils.getArrayDataFromSheet(data);
            }
        }

        function loadCategories() {
            vm.promise = CategoryService.getCategories({}, onSuccess, onError);

            function onSuccess(data) {
                vm.categories = DataUtils.getArrayDataFromSheet(data);
            }
        }

        function loadPublications() {
            vm.promise = PublicationService.getPublications({}, onSuccess, onError);

            function onSuccess(data) {
                vm.publications = DataUtils.getArrayDataFromSheet(data);
            }
        }

        function onError(error) {
            console.log(error);
        }
    }
})();