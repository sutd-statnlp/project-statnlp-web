(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('TutorialService', TutorialService);

    TutorialService.$inject = ['$resource','DataService'];

    function TutorialService($resource,DataService) {

        return $resource('', {}, {
            'getTutorials': { method: 'GET', cache: true, url: DataService.getApiEndpoint('Tutorial', 'A1', 'H8') }
        });

    }
})();
