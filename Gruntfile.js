module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			src: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: ['app.js','tizen/js/*.js']
			}
		},
		jscs: {
			src: {
				options: {
					config: '.jscsrc'
				},
				src: ['app.js','tizen/js/*.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');
	grunt.registerTask('default', ['precommit']);
	grunt.registerTask('precommit', ['jshint:src', 'jscs:src']);
}
