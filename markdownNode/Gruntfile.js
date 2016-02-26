module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		// copy: {
		// 	marked: {
		// 		files: [
		// 			{ cwd: 'node_modules/marked/lib', src: '**', dest: 'js/test/' }
		// 		]
		// 	}
		// }
		bowercopy: {
			options: {
				srcPrefix: 'bower_components/',
				destPrefix: 'js/'
			},
			marked: {
				options: {
					srcPrefix: 'node_modules/marked/'
				},
				files: {
					'': 'marked.min.js'
				}
			}
		}
	});

	// Load plugins and tasks
	// grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-bowercopy');

	// Tasks
	// grunt.registerTask('default', ['copy']);
	grunt.registerTask('default', ['bowercopy']);
};
