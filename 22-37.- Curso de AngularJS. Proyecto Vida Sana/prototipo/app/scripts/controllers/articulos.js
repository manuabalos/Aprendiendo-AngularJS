'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:ArticulosCtrl
 * @description
 * # ArticulosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
	.controller('ArticulosCtrl', function ($scope) {

  	$scope.posts = [
  		{
  			title: "Alimentos buenos para la salud",
  			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id suscipit turpis. Fusce eleifend ligula magna, ac euismod libero viverra quis. In luctus scelerisque quam sed laoreet. Aenean condimentum eros ligula, id gravida ipsum facilisis ac. Fusce efficitur feugiat euismod. Phasellus posuere erat quam, a euismod urna efficitur id. Donec bibendum, tellus eget viverra ornare, lectus eros tristique ante, et volutpat neque urna vitae tortor. Phasellus sed est vel nibh dapibus condimentum. Nunc pharetra ante et odio blandit facilisis. Nulla porttitor elementum tellus."
  		},
  		{
  			title: "Alimentos menos para la salud",
  			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id suscipit turpis. Fusce eleifend ligula magna, ac euismod libero viverra quis. In luctus scelerisque quam sed laoreet. Aenean condimentum eros ligula, id gravida ipsum facilisis ac. Fusce efficitur feugiat euismod. Phasellus posuere erat quam, a euismod urna efficitur id. Donec bibendum, tellus eget viverra ornare, lectus eros tristique ante, et volutpat neque urna vitae tortor. Phasellus sed est vel nibh dapibus condimentum. Nunc pharetra ante et odio blandit facilisis. Nulla porttitor elementum tellus."
  		},
  		{
  			title: "Limita tu cantidad de hidratos de carbono",
  			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id suscipit turpis. Fusce eleifend ligula magna, ac euismod libero viverra quis. In luctus scelerisque quam sed laoreet. Aenean condimentum eros ligula, id gravida ipsum facilisis ac. Fusce efficitur feugiat euismod. Phasellus posuere erat quam, a euismod urna efficitur id. Donec bibendum, tellus eget viverra ornare, lectus eros tristique ante, et volutpat neque urna vitae tortor. Phasellus sed est vel nibh dapibus condimentum. Nunc pharetra ante et odio blandit facilisis. Nulla porttitor elementum tellus."
  		}
  	];

  });
