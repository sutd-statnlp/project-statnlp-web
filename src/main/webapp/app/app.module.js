(function() {
    'use strict';

    angular
        .module('webApp', [
            'ngResource',
            'ngAria',
            'ui.router',
            'oc.lazyLoad',
            'ngAnimate',
            'cgBusy',
            'infinite-scroll'
        ])
        .run(run);

    run.$inject = ['stateHandler'];

    function run(stateHandler) {
        stateHandler.initialize();
    }
})();
