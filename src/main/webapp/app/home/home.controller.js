(function() {
    'use strict';

    angular
        .module('webApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$state','$ocLazyLoad'];

    function HomeController ($scope, $state,$ocLazyLoad) {
        var vm = this;

       
    }
})();
