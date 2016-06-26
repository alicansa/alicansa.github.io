var wanderWalletScreen = angular.module('wanderWalletScreen', []);


wanderWalletScreen.directive("screen", function ($window) {
    return {
        scope: {
            images: '@images'
        },

        link: function(scope, element, attrs) {
            //images string to array
            var imageArr = scope.images.split(",");
            var containerOffsets = [];
            console.log(imageArr);

            //get element y locations
            for (var i = 0; i < imageArr.length; i++) {
                containerOffsets.push($('#'+imageArr[i]).offset().top);
               
            };
             console.log(containerOffsets);

            //bind window scroll event
            
            angular.element($window).bind("scroll", function() {

                var largestOffset = 0;
                var largestOffsetIndex = 0;
                for (var i = 0; i < imageArr.length; i++) {
                    if(this.pageYOffset+20 > containerOffsets[i]){
                        if (containerOffsets[i] > largestOffset){
                            largestOffset = containerOffsets[i];
                            largestOffsetIndex = i;
                        }
                    }
                }

                $(".current_view").attr('src',"css/img/" + imageArr[largestOffsetIndex] + ".png");

                 
            });


        },
        templateUrl : 'partials/screen.html'
    };
});