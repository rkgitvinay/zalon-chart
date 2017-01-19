'use strict';


angular.module('admin', [])
    .controller('HomeCtrl',function ($http,$scope, $rootScope, $location){                                                             
    	$scope.trending = 'trending';
        $http({
            method  : 'GET',
            url     : 'http://localhost:3000/admin/getTweets',                    
        })
        .success(function (response) {
           if(response.status=='success'){
           		$scope.hash_list = response.data.hash_list;
           		$scope.tweet_list = response.data.tweet_list;
           }
        });                       

    });  
   
