(function () {
    'use strict';
    angular
        .module('webApp')
        .factory('DataService', DataService);

    DataService.$inject = ['$resource'];

    function DataService($resource) {
        var spreadsheetId = '1oY0Oozw7KPs2EwxrR9bgcn65C-NMbau0s1JBhED0bP4';
        var apiKey = 'AIzaSyBQBvZnbU-SJqBtYxawwh4hkEGhl8UML-I';

        function getApiEndpoint(sheetName, start, end) {
            return 'https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/' + sheetName + '!' + start + '%3A' + end + '?key=' + apiKey;
        }

        function getApiEndpointTwoRanges(sheetName1, start1, end1, sheetName2, start2, end2) {
            return 'https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values:batchGet\:batchGet?ranges=' + sheetName1 + '!' + start1 + '%3A' + end1 + '&ranges=' + sheetName2 + '!' + start2 + '%3A' + end2 + '&key=' + apiKey;
        }

        function getApiEndpointMultiRanges(sheetName1, start1, end1,sheetName2, endStarts) {
            var urlString = '';
            for (var i = 0; i < endStarts.length; i++) {
                var item = endStarts[i];
                urlString += '&ranges=' + sheetName2 + '!' + item + '%3A' + item;
            }
            return 'https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values:batchGet\:batchGet?ranges=' + sheetName1 + '!' + start1 + '%3A' + end1 + urlString + '&key=' + apiKey;
        }

        var service = {
            getApiEndpoint: getApiEndpoint,
            getApiEndpointTwoRanges: getApiEndpointTwoRanges,
            getApiEndpointMultiRanges: getApiEndpointMultiRanges,
            getCommonArray: getCommonArray
        };
        return service;

        function getCommonArray(arr1, arr2) {
            var newArr = [];
            newArr = arr1.filter(function (v) {
                return arr2.indexOf(v) >= 0;
            });
            newArr.concat(arr2.filter(function (v) {
                return newArr.indexOf(v) >= 0;
            }));

            return newArr;
        }
    }
})();

