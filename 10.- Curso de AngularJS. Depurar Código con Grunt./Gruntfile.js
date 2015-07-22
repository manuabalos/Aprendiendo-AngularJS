'use strict';

module.export = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		options: {
		    node: true
		},
		jshint:{
			src:['script.js']
		}
	});

	// Load jshint plugin
  	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Default task(s).
	grunt.registerTask('default', ['jshint']);
};