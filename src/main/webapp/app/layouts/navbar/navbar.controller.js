(function() {
    'use strict';

    angular
        .module('webApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', '$state','$ocLazyLoad'];

    function NavbarController ($scope, $state,$ocLazyLoad) {
        var vm = this;
        $ocLazyLoad.load('content/js/front.js');
        var currentState = $state.current.name;

        $(document).ready(function() {
            var navEle = $('#navigation ul li');
            navEle.each(function(){
                if( currentState === $(this).attr('data-state')){
                    activateNavEle($(this));
                }
            });
           

            navEle.click(function() {
                activateNavEle($(this));
            });

            function activateNavEle(ele){
                navEle.removeClass('active');
                ele.addClass('active');
            }
            $('.navbar-brand').click(function() {
                navEle.removeClass('active');
            });
        });
    }
})();
