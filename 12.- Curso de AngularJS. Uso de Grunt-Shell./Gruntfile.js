module.export = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		jshint: {
			src: ['script.js']
		},
		concat: {
			dist:{
				src: ['script.js','script1.js','script2.js'],
				dest: 'unidos.js'
			}
		},
		uglify: {
			dist:{
				src: 'unidos.js',
				dest: 'build/unidos.min.js'
			}
		},
		shell: {
			multiple: {
				command: [
					'rm -r unidos.js',
					'mkdir deploy',
					'move build/unidos.min.js deploy/unidos.min.js'
				].join('&&')
			}
		}
	});

	// Load plugin(s).
  	grunt.loadNpmTasks('grunt-contrib-jshint');
  	grunt.loadNpmTasks('grunt-contrib-concat');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-shell');


	// Default task(s).
	grunt.registerTask('default', ['jshint','concat','uglify','shell']);
};