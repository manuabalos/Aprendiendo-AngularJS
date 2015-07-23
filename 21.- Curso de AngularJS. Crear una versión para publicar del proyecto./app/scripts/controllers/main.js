'use strict';

/**
 * @ngdoc function
 * @name 16CursoDeAngularJsCrearListaDeTareasConYeomaniApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 16CursoDeAngularJsCrearListaDeTareasConYeomaniApp
 */
angular.module('16CursoDeAngularJsCrearListaDeTareasConYeomaniApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
  	var tareasEnAlmacen = localStorageService.get('tareas');
  	$scope.tareas = tareasEnAlmacen && tareasEnAlmacen.split('\n') || [];
  	$scope.$watch('tareas', function(){
  		localStorageService.add('tareas', $scope.tareas.join('\n'));
  	}, true);

  	$scope.addTarea = function(){
  		$scope.tareas.push($scope.tarea);
  		$scope.tarea = '';
  	};

  	$scope.eliminarTarea = function(index){
  		$scope.tareas.splice(index,1);
  	};

});
