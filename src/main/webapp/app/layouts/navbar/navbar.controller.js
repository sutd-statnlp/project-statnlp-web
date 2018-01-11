(function() {
    'use strict';

    angular
        .module('webApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', '$state','$ocLazyLoad'];

    function NavbarController ($scope, $state,$ocLazyLoad) {
        var vm = this;
        $ocLazyLoad.load('content/js/front.js');
    }
})();
