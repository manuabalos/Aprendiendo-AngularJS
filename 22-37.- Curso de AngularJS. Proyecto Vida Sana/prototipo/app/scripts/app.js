'use strict';

/**
 * @ngdoc overview
 * @name prototipoApp
 * @description
 * # prototipoApp
 *
 * Main module of the application.
 */
angular
  .module('prototipoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.grid'
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
      .when('/articulos', {
        templateUrl: 'views/articulos.html',
        controller: 'ArticulosCtrl',
        controllerAs: 'articulos'
      })
      .when('/galeria', {
        templateUrl: 'views/galeria.html',
        controller: 'GaleriaCtrl',
        controllerAs: 'galeria'
      })
      .when('/miembros', {
        templateUrl: 'views/miembros.html',
        controller: 'MiembrosCtrl',
        controllerAs: 'miembros'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
