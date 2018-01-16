(function () {
    'use strict';

    angular
        .module('webApp')
        .controller('NewsController', NewsController);

    NewsController.$inject = ['$scope', '$state', 'NewsService', 'DataUtils'];

    function NewsController($scope, $state, NewsService, DataUtils) {
        var vm = this;
        vm.news = [];
        vm.promise = {};
        vm.loadMoreNews = loadMoreNews;
        var isRemaining = true;
        var isLoading = false;
        var moreNewStart = 1;
        var moreNewEnd = 9;
        var labels = [];

        loadMoreNews();

        function loadMoreNews() {
            if (isLoading)
                return;
            isLoading = true;
            if (isRemaining)
                vm.promise = NewsService.getNewsWithStartEnd(moreNewStart, moreNewEnd).getNews({}, onSuccess, onError);

            function onSuccess(data) {
                if (data.values) {
                    if (labels.length === 0)
                        labels = data.values[0];
                    else
                        data.values.unshift(labels);
                    pushNews(data);
                    moreNewStart = moreNewEnd;
                    moreNewEnd = moreNewStart + 6;
                    isLoading = false;
                } else
                    isRemaining = false;
            }
        }

        function pushNews(data) {
            var news = DataUtils.getArrayDataFromSheet(data);
            for (var i = 0; i < news.length; i++) {
                vm.news.push(news[i]);
            }
        }

        function onError(error) {
            console.log(error);
        }
    }
})();