(function() {
    'use strict';

    angular
        .module('webApp')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$scope', '$state'];

    function FooterController ($scope, $state) {
        var vm = this;
    }
})();
