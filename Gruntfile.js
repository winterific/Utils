module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    basePath: "static",
                    config: "static/config.rb"
                }
            }
        },
        watch: {
            files: "static/sass/*.scss",
            tasks: ['compass']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['compass']);
};