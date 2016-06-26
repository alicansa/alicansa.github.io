var alicanSalorIndex = angular.module('alicanSalorIndexModule', ['ui.router','alicanSalorHomeModule',
																	'alicanSalorHeader','alicanSalorFooter',
																	'alicanSalorBlog','alicanSalorContact']);



alicanSalorIndex.config(function($stateProvider) {

  $stateProvider
    .state('home',{
	   	url: '/home',
      	templateUrl: 'home.html',
      	anchor : true
    })
    .state('aboutme',{
    	url: '/aboutme',
      	templateUrl: 'home.html',
    	anchor : true
    })
    .state('blog',{
     	url: '/blog/{blogId}',
      	templateUrl: 'blog.html',
      	controller : 'BlogController'
     })
    .state('contact',{
    	url: '/contact',
      	templateUrl: 'contact.html',
      	controller : 'ContactController'
    })
    .state('wanderwallet',{
      url: '/wanderwallet',
        templateUrl: 'wanderwallet.html'
    })
     .state('cv',{
     	url: '/cv',
      	templateUrl: 'cv.html',
      	controller : 'HomeController'
     });

});

alicanSalorIndex.run(function($state,$rootScope,$location, $anchorScroll, $stateParams,$window,HeaderScroll,$timeout){
	
	$state.go('home');
	console.log("init");

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

			$timeout(function() {

				console.log(toState);
	 			if (toState.anchor){
	    			HeaderScroll.scrollToID(toState.name);
	    		}else{
	    			$window.scrollTo(0,0);
	    		}
			}, 1);
		 	
		
  	});
	
});