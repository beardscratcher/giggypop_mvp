
module.exports = function(grunt) {

	grunt.initConfig({
		compass: {
			options: {
				sassDir: 'public/scss/',
				cssDir: 'public/stylesheets/',
				bundleExec: true
			},
			build: {
				options: { outputStyle: 'compressed' }
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['compass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('compile', ['compass']);
};