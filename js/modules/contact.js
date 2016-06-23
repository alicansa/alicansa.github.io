var alicanSalorContact = angular.module('alicanSalorContact', []);

alicanSalorContact.controller("ContactController", function($scope,$http){

	$scope.submitContactForm = function(){

		//send email thru server
		$scope.success = 2;
		console.log($scope.contact);

		$http({method : 'POST',
			 url : "http://alicansalor.com/personal/contact",
			 data : $scope.contact
			 }).success(function(data, status, headers, config){
			 	console.log("email sent");
			 	$scope.success=1;
				
			}).error(function(data, status, headers, config){
				$scope.success= -1;
			});

	}
});