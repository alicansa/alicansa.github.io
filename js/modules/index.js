var alicanSalorIndex = angular.module('alicanSalorIndexModule', ['ui.router','alicanSalorHomeModule',
																	'alicanSalorHeader','alicanSalorFooter',
																	'alicanSalorBlog','alicanSalorContact','wanderWalletScreen',

                                  'klanWebHomeModule','klanWebIntroModule',
                                                          'klanWebArtistsModule','klanWebHeader','klanWebArtist',
                                                          'klanWebNews','klanWebContact','klanWebBooking'

                                  ]);



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
     })


     .state('klan_home',{
    url: '/klan/home',
    templateUrl: 'klan_home.html',
    controller : 'HomeController',
    module : 'public'
  })

    .state('news',{
    url: '/klan/news',
    templateUrl: 'klan_news.html',
    controller : 'NewsController',
    module : 'public'
    })
    .state('jonnyRock',{
      url: '/klan/jonnyrock',
      templateUrl: 'klan_jonnyrock.html',
      module : 'public'
    })
    .state('keremAkdag',{
      url: '/klan/keremakdag',
      templateUrl: 'klan_keremakdag.html',
      module : 'public'
    })
    .state('kaanDuzarat',{
      url: '/klan/kaanduzarat',
      templateUrl: 'klan_kaanduzarat.html',
      module : 'public'
    })
    .state('ponza',{
      url: '/klan/ponza',
      templateUrl: 'klan_ponza.html',
      module : 'public'
    })
    .state('roster',{
      url: '/klan/roster',
      templateUrl: 'klan_roster.html',
      module : 'public'
    })
    .state('booking',{
      url: '/klan/booking',
      templateUrl: 'klan_booking.html',
      controller : 'BookingController',
      module : 'public'
    })
    .state('contact',{
      url: '/klan/contact',
      templateUrl: 'klan_contact.html',
      controller : 'ContactController',
      module : 'public'
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