'use strict';

/**
 * @ngdoc function
 * @name 16CursoDeAngularJsCrearListaDeTareasConYeomaniApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 16CursoDeAngularJsCrearListaDeTareasConYeomaniApp
 */
angular.module('16CursoDeAngularJsCrearListaDeTareasConYeomaniApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.tareas = [];

  	$scope.addTarea = function(){
  		$scope.tareas.push($scope.tarea);
  		$scope.tarea = '';
  	};

  	$scope.eliminarTarea = function(index){
  		$scope.tareas.splice(index,1);
  	};

});
