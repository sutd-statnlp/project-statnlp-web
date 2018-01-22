(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('TeamService', TeamService);

    TeamService.$inject = ['$resource','DataService'];

    function TeamService($resource,DataService) {

        return $resource('', {}, {
            'getMembers': { method: 'GET', cache: true, url: DataService.getApiEndpoint('Team', 'A1', 'L60') }
        });

    }
})();
