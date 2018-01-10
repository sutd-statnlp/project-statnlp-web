(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('DataService', DataService);

    DataService.$inject = ['$resource'];

    function DataService($resource) {
        var resourceUrl = 'api/data/';
        var spreadsheetId = '1oY0Oozw7KPs2EwxrR9bgcn65C-NMbau0s1JBhED0bP4';
        var apiKey = 'AIzaSyBQBvZnbU-SJqBtYxawwh4hkEGhl8UML-I';

        function getApiEndpoint(sheetName, start, end) {
            return 'https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/' + sheetName + '!' + start + '%3A' + end + '?key=' + apiKey;
        }

        return $resource(resourceUrl, {}, {
            'getMembers': { method: 'GET', url: getApiEndpoint('Team', 'A1', 'B3') }
        });

    }
})();
