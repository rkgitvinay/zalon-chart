'use strict';

angular.module('admin')
     .controller('LoginCtrl',function ($http,$scope, $rootScope, $location,$window){             
            if($window.localStorage['access_token']){
                $location.path('/home');
            }else{
                $location.path('/');
            }
            $scope.formData = {};             
            $scope.login = function (){    
                var data =  JSON.stringify($scope.formData);                                     
                $http({
                    method  : 'POST',
                    url     : 'http://localhost:3000/admin/login',
                    data    : {payload:data}
                }).then(function(response){
                    if(response.data.status == 'success'){
                        $rootScope.username = response.data.user[0].username;
                        $window.localStorage['access_token'] = response.data.user[0].access_token;
                        $location.path('/home');
                    }                                       
                });               
            }
        })
        .controller('HomeCtrl',function ($http,$scope, $rootScope, $location,$window){            
            if(!$window.localStorage['access_token']){
               $location.path('/');
            }
            $scope.logout =  function(){
                $http({
                    method  : 'GET',
                    url     : 'http://localhost:3000/admin/logout',                    
                }).then(function(response){
                    if(response.data.status == 'success'){
                        $window.localStorage.removeItem('access_token');
                        $location.path('/');
                    }                    
                }); 
            }
        });  


