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

  .config(function ($routeProvider) {
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
  });
