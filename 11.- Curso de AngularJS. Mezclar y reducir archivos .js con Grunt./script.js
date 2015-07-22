angular.module('myApp',[]).controller('AlumnoController',function($scope){
	$scope.alumnos=[
		{nombre: "Manuel Ábalos", telefono: "11111", curso: "Sin curso"},
		{nombre: "Juan Blanco", telefono: "22222", curso: "1º ESO"},
		{nombre: "Alberto Herrera", telefono: "33333", curso: "2º ESO"},
		{nombre: "Ana Mariño", telefono: "44444", curso: "2º ESO"},
		{nombre: "Rosa Luxemburgo", telefono: "55555", curso: "3º ESO"}
	];

	$scope.Save = function(){
		$scope.alumnos.push({ nombre: $scope.nuevoAlumno.nombre, telefono: $scope.nuevoAlumno.telefono, curso: $scope.nuevoAlumno.curso});
		$scope.formVisibility = false;
	};

	$scope.formVisibility = false;
	$scope.ShowForm = function(){
			$scope.formVisibility = true;
	};

});