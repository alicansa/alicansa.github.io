var alicanSalorHeader = angular.module('alicanSalorHeader', []);

alicanSalorHeader.service('HeaderScroll',function($window,$timeout){
    var elementTopPos=0;
    var sampleSize=100;
    var currentSampleIndex=0;
    var windowScroll = 0;
    function scrollAnimation(){

        if (currentSampleIndex <= sampleSize){

            if (windowScroll <= elementTopPos){ 
                $window.scrollTo(0,windowScroll + (elementTopPos-windowScroll)*Math.sin((currentSampleIndex/sampleSize)*Math.PI/2));
            }else if(windowScroll > elementTopPos){
                $window.scrollTo(0,windowScroll - (windowScroll - elementTopPos)*Math.sin((currentSampleIndex/sampleSize)*Math.PI/2));
            }
            currentSampleIndex++;
            $timeout(scrollAnimation, 10);
        }

    }

    //points on sine wave from 0 to pi/2
    this.scrollToID = function(id){
        console.log($('#' + id));
        console.log($('#' + id).offset());
        elementTopPos = $('#' + id).offset().top;
        console.log(elementTopPos);
        currentSampleIndex = 0;
        windowScroll = $(window).scrollTop();
        $timeout(scrollAnimation, 10);
     

    }

});

alicanSalorHeader.controller('HeaderController', function($scope,$window,$timeout,HeaderScroll){

    $scope.navToAbout = function(){
        HeaderScroll.scrollToID('aboutme');
    }

    $scope.navToHome = function(){
        HeaderScroll.scrollToID('home');
    }
});

alicanSalorHeader.directive("header", function ($window) {
    return {
        restrict: 'A',
        scope: {
            activeTab: '@activeTab'
        },
        controller: 'HeaderController',
        link: function(scope, element, attrs) {


            angular.element($window).bind("scroll", function() {
                    
                if($window.innerWidth > 480) {//check for mobile
                     if(this.pageYOffset <= 400){
                     	angular.element('.header-down').css('opacity', this.pageYOffset/400);
                     	angular.element('.header-up').css('opacity', 1-this.pageYOffset/400);
                        angular.element('.header-up').css('visibility', 'visible');
                     }else{
                     	angular.element('.header-down').css('opacity', 1);
                     	angular.element('.header-up').css('visibility', 'hidden');
                     }

                    
                }

                scope.$apply();
                
            });

            angular.element('.header-up').css('background-image', "url(css/img/header_bg_" + scope.activeTab + ".jpg)");

            function setHeader(tabName){
                //remove all
                angular.element("#about_up").removeClass("active");
                angular.element("#home_up").removeClass("active");
                angular.element("#cv_up").removeClass("active");
                angular.element("#blog_up").removeClass("active");
                angular.element("#contact_up").removeClass("active");

                angular.element("#about_down").removeClass("active");
                angular.element("#home_down").removeClass("active");
                angular.element("#cv_down").removeClass("active");
                angular.element("#blog_down").removeClass("active");
                angular.element("#contact_down").removeClass("active");

                //add
                angular.element("#" + tabName + "_up").addClass("active");
                angular.element("#" + tabName + "_down").addClass("active");

            }

            if(scope.activeTab === "home"){
                setHeader("home");
            }else if(scope.activeTab === "cv"){
                setHeader("cv");
            }else if(scope.activeTab === "contact"){
                setHeader("contact");
            }else if(scope.activeTab === "blog"){
                setHeader("blog");
            }else if(scope.activeTab === "about"){
                setHeader("about");
            }

            


        },
        templateUrl : 'partials/header.html'
    };
});