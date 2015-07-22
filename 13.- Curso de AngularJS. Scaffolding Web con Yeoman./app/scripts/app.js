'use strict';

/**
 * @ngdoc overview
 * @name 13CursoDeAngularJsScaffoldingWebConYeomanApp
 * @description
 * # 13CursoDeAngularJsScaffoldingWebConYeomanApp
 *
 * Main module of the application.
 */
angular
  .module('13CursoDeAngularJsScaffoldingWebConYeomanApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
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
