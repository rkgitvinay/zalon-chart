'use strict';
  
angular.module('admin')
     .controller('LoginCtrl',function ($http,$scope, $rootScope, $location){      
            $scope.formData = {}; 
            $scope.login = function (){                                       
                $http({
                    method  : 'GET',
                    url     : 'http://localhost:3000/admin/get',
                    data    : {payload:$scope.formData}
                    // headers : { 'Content-Type': 'application/x-www-form-urlencoded' } 
                })
                .success(function (response) {
                   console.log(response);
                });               
            }
        })
     .controller('HomeCtrl',function ($http,$scope, $rootScope, $location){      
           $scope.test = 'test';
        });  


