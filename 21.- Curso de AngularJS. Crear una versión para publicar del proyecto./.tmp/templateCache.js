angular.module('16CursoDeAngularJsCrearListaDeTareasConYeomaniApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"container\"> <h2> Mis tareas</h2> <form role=\"form\" ng-submit=\"addTarea()\"> <div class=\"row\"> <div class=\"input-group\"> <input type=\"text\" ng-model=\"tarea\" placeholder=\"¿Qué tarea quieres guardar?\" class=\"form-control\"> <span class=\"input-group-btn\"> <input type=\"submit\" class=\"btn btn-primary\" value=\"Añadir\"> </span> </div> </div> </form> <hr> <div ui-sortable ng-model=\"tareas\"> <p class=\"input-group\" ng-repeat=\"tarea in tareas\" style=\"padding: 5px 10px; cursor: move\"> <input type=\"text\" ng-model=\"tarea\" class=\"form-control\"> <span class=\"input-group-btn\"> <buttom class=\"btn btn-danger\" ng-click=\"eliminarTarea($index)\" aria-label=\"Eliminar\">X</buttom> </span> </p> <div> </div></div></div>"
  );

}]);
