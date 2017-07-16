
    	//import { Http, Response } from '@angular/http';

	    var myapp = angular.module("myApp", []);
	    myapp.controller("empcontrollerobj",empcontroller);
	   // myapp.service
	    function empcontroller($scope,$http)
		{
			$scope.Empcode="100";
			$scope.EmpName="tamil";
			$scope.EmpDOB="12/06/1979";
			$scope.Gender=["","Male","Female"];
			$scope.eMail="chinna.tamil2000@gmail.com"
			$scope.serverjson = "Initial.data";
			$scope.SendRequesttoNode=function()
			{
				alert("hello My Validator");
				$scope.serverjson = "response.data";
				$http.head=undefined;
				$http.get('http://rest-service.guides.spring.io/greeting').
				then(function(response) {
					$scope.serverjson=response.data;
				
				});
				     
			}
			/*			
			$scope.SendRequesttoNode=function($scope,$http)
				{
					alert("hello My Validator");
					
				
					$http.get('http://rest-service.guides.spring.io/greeting')
		        	.success(function(data, status, headers, config) {
		       	   $scope.serverjson = data;
		      	 	 })
		      	 	 .error(function(data, status, headers, config) {
      
   					 });
				}*/	 

	/*
			angular.module('demo', [])
			.controller('Hello', function($scope, $http) {
			$http.get('http://rest-service.guides.spring.io/greeting').
			then(function(response) {
			$scope.greeting = response.data;
			});
			});
*/
				
		/*	if($scope.Empcode== 100 ) 
			{
					alert("Hi I am inside the controller");
			}*/

		}
 
