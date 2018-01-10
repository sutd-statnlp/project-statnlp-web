(function() {
    'use strict';

    angular
        .module('webApp', [
            'ngResource',
            'ngAria',
            'ui.router',
            'angular-loading-bar',
            'oc.lazyLoad'
        ])
        .run(run);

    run.$inject = ['stateHandler'];

    function run(stateHandler) {
        stateHandler.initialize();
    }
})();
