'use strict';
angular.module('admin', ['ngRoute'])
    .config(function($routeProvider,$httpProvider,$locationProvider){
        $httpProvider.defaults.useXDomain = true;      
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        
        $routeProvider
        .when('/', {         	
        	templateUrl: 'views/login.html', 
        	controller: 'LoginCtrl' 
        })
        .when('/home', {            
            templateUrl: 'views/home.html', 
            controller: 'HomeCtrl' 
        })
        .when('/sales', {            
            templateUrl: 'views/sales.html', 
            //controller: 'SalesCtrl' 
        })
        .when('/customer', {            
            templateUrl: 'views/customer.html', 
            //controller: 'CustomerCtrl' 
        })
        .otherwise({ 
        	redirectTo: '/' ,        	
        });


});
   
