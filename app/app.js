'use strict';
angular.module('admin', ['ngRoute'])
    .config(function($routeProvider,$httpProvider){
        $httpProvider.defaults.useXDomain = true;      
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        
        $routeProvider
        .when('/', {         	
        	templateUrl: 'views/home.html', 
        	controller: 'LoginCtrl' 
        })
        .when('/home', {            
            templateUrl: 'views/home.html', 
            controller: 'HomeCtrl' 
        })
        .otherwise({ 
        	redirectTo: '/login' ,
        	templateUrl: 'views/home.html',
        });
});
   
