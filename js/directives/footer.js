var alicanSalorFooter = angular.module('alicanSalorFooter', []);

alicanSalorFooter.directive("footer", function ($window) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
        },
        templateUrl : 'partials/footer.html'
    };
});