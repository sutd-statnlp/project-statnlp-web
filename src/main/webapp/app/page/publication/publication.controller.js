(function () {
    'use strict';

    angular
        .module('webApp')
        .controller('PublicationController', PublicationController);

    PublicationController.$inject = ['$scope', '$state', '$stateParams', 'PublicationService', 'DataUtils', 'PublicationCategoryService', 'TagService', 'YearService'];

    function PublicationController($scope, $state, $stateParams, PublicationService, DataUtils, PublicationCategoryService, TagService, YearService) {
        var vm = this;
        vm.publications = [];
        vm.promise = {};
        vm.categories = [];
        vm.tags = [];
        vm.years = [];
        vm.year = $stateParams.year;
        vm.category = $stateParams.category;
        vm.tag = $stateParams.tag;

        loadPublications();
        loadCategories();
        loadTags();
        loadYears();

        function loadYears() {
            vm.promise = YearService.getYears({}, onSuccess, onError);

            function onSuccess(data) {
                vm.years = DataUtils.getArrayDataFromSheet(data);
            }
        }

        function loadTags() {
            vm.promise = TagService.getTags({}, onSuccess, onError);

            function onSuccess(data) {
                vm.tags = DataUtils.getArrayDataFromSheet(data);
            }
        }

        function loadCategories() {
            vm.promise = PublicationCategoryService.getCategories({}, onSuccess, onError);

            function onSuccess(data) {
                vm.categories = DataUtils.getArrayDataFromSheet(data);
            }
        }

        function loadPublications() {
            if (vm.category && vm.tag && vm.year) {
                vm.promise = PublicationService.getPublicationsByCombination([vm.category.publications, vm.tag.publications, vm.year.publications]).getPublications({}, onSuccessByOthers, onError);
            } else if (vm.category && vm.tag) {
                vm.promise = PublicationService.getPublicationsByCombination([vm.category.publications, vm.tag.publications]).getPublications({}, onSuccessByOthers, onError);
            } else if (vm.category && vm.year) {
                vm.promise = PublicationService.getPublicationsByCombination([vm.category.publications, vm.year.publications]).getPublications({}, onSuccessByOthers, onError);
            } else if (vm.tag && vm.year) {
                vm.promise = PublicationService.getPublicationsByCombination([vm.tag.publications, vm.year.publications]).getPublications({}, onSuccessByOthers, onError);
            } else {
                if (vm.year) {
                    vm.promise = PublicationService.getPublicationsByOthers(vm.year.publications).getPublications({}, onSuccessByOthers, onError);
                }
                if (vm.category) {
                    vm.promise = PublicationService.getPublicationsByOthers(vm.category.publications).getPublications({}, onSuccessByOthers, onError);
                }
                if (vm.tag) {
                    vm.promise = PublicationService.getPublicationsByOthers(vm.tag.publications).getPublications({}, onSuccessByOthers, onError);
                }
            }
            if (!vm.tag && !vm.category && !vm.year)
                vm.promise = PublicationService.getPublications({}, onSuccess, onError);

            function onSuccess(data) {
                vm.publications = DataUtils.getArrayDataFromSheet(data);
            }

            function onSuccessByOthers(data) {
                vm.publications = DataUtils.getArrayFromSheetMultiRanges(data);
            }
        }

        function onError(error) {
            console.log(error);
        }
    }
})();
