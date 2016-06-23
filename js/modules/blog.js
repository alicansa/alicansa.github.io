var alicanSalorBlog = angular.module('alicanSalorBlog', []);


alicanSalorBlog.controller("BlogController",function($scope,$stateParams,$http,$sce){

    $scope.blogJson = "";
    $scope.summaryView = true;
    $scope.loading = true;

    //if there is no state param show a summary of blog posts
    console.log($stateParams.blogId);
    if ($stateParams.blogId === "" || $stateParams.blogId == undefined){
        console.log("get summaries");
        $scope.summaryView = true;
        $scope.loading = true;
         $http({method : 'GET',
             url : "http://alicansalor.com/personal/blog?command=blog_summaries&limit=5"
             }).success(function(data, status, headers, config){
                console.log(data);
                $scope.blogJson = data;

                for (var i = 0; i < data.blogItems.length; i++) {
                    $scope.blogJson.blogItems[i].summary= $sce.trustAsHtml(data.blogItems[i].summary);
                };

                $scope.loading = false;

            }).error(function(data, status, headers, config){

                if (status == 404){
                    alert("content not found");
                }else if(status == 500){
                    alert("couldnt fetch summaries");
                }
            });
    }else{
        $scope.summaryView = false;
        $scope.loading = true;
         //content-> ajax call -> use state param blogId -> alicansalor.com/blog?id=blodId 
        $http({method : 'GET',
             url : "http://alicansalor.com/personal/blog?command=blog_post&id=" + $stateParams.blogId
             }).success(function(data, status, headers, config){
                $scope.blogJson = data;
                $scope.blogJson.content = $sce.trustAsHtml(data.content);
                console.log($scope.blogJson);
                $scope.loading = false;
            }).error(function(data, status, headers, config){

                if (status == 404){
                    alert("content not found");
                }else if(status == 500){
                    alert("couldnt fetch blog");
                }
            });
    }
   

    //navigation -> ajax call -> alicansalor.com/blog?recentLimit=int


});

alicanSalorBlog.directive("summaryLayout",function($window){

    return{
        restrict : 'A',
        link : function(scope,element,attrs){

        }
    }


});


alicanSalorBlog.directive("contentWrapper",function($sce){

    return {
        restrict: 'E',
        controller : function(){

        },
        link: function(scope, element, attrs) {

            //get the content array [.html,.html ...]
            scope.getWrapperTemplate = function() {
                //process the content array here and return the html template
                // var template = "<div>";
                // var contentTemplate = "";
                // for (var i=0;i<contentArray.length;i++){
                //    contentTemplate =  "<content contentUrl=\"" + contentArray[i] + "\"></content>"
                //    navigationTemplate = "<navigation contentUrl=\"" + navigationArray[i] + "\"></navigation>"
                // }

                // return "<div class=\"container\">" +
                //             "<div class=\"row\"><div class=\"nine columns\">" + 
                //                 contentTemplate + 
                //             "</div>" +
                //             "<div class=\"three columns\">" + 
                //                 navigationTemplate + 
                //             "</div>" + 
                //         "</div>";

                // return $sce.trustAsHtml(scope.blogContent);
            }
                


        }
        // template : '<div ng-bind-html="blogContent"></div>'
    };

})

alicanSalorBlog.directive("navigation", function ($window) {
    return {
        restrict: 'E',
        controller : function(){

        },
        link: function(scope, element, attrs) {
            scope.getContentUrl = function() {
                return attrs.contentUrl;
            }
                
        },
        template : '<div ng-include="contentUrl"></div>'
    };
});