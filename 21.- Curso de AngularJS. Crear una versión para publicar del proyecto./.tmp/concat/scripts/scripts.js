'use strict';

/**
 * @ngdoc overview
 * @name 16CursoDeAngularJsCrearListaDeTareasConYeomaniApp
 * @description
 * # 16CursoDeAngularJsCrearListaDeTareasConYeomaniApp
 *
 * Main module of the application.
 */
angular
  .module('16CursoDeAngularJsCrearListaDeTareasConYeomaniApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])

  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name 16CursoDeAngularJsCrearListaDeTareasConYeomaniApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 16CursoDeAngularJsCrearListaDeTareasConYeomaniApp
 */
angular.module('16CursoDeAngularJsCrearListaDeTareasConYeomaniApp')
  .controller('MainCtrl', ["$scope", "localStorageService", function ($scope, localStorageService) {
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

}]);

'use strict';

/**
 * @ngdoc function
 * @name 16CursoDeAngularJsCrearListaDeTareasConYeomaniApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the 16CursoDeAngularJsCrearListaDeTareasConYeomaniApp
 */
angular.module('16CursoDeAngularJsCrearListaDeTareasConYeomaniApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('16CursoDeAngularJsCrearListaDeTareasConYeomaniApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"container\"> <h2> Mis tareas</h2> <form role=\"form\" ng-submit=\"addTarea()\"> <div class=\"row\"> <div class=\"input-group\"> <input type=\"text\" ng-model=\"tarea\" placeholder=\"¿Qué tarea quieres guardar?\" class=\"form-control\"> <span class=\"input-group-btn\"> <input type=\"submit\" class=\"btn btn-primary\" value=\"Añadir\"> </span> </div> </div> </form> <hr> <div ui-sortable ng-model=\"tareas\"> <p class=\"input-group\" ng-repeat=\"tarea in tareas\" style=\"padding: 5px 10px; cursor: move\"> <input type=\"text\" ng-model=\"tarea\" class=\"form-control\"> <span class=\"input-group-btn\"> <buttom class=\"btn btn-danger\" ng-click=\"eliminarTarea($index)\" aria-label=\"Eliminar\">X</buttom> </span> </p> <div> </div></div></div>"
  );

}]);
