/* global module:false */
module.exports = function (grunt) {
    var port = grunt.option('port') || 8000;
    var base = grunt.option('base') || '.';

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            themes: {
                files: [
                    {
                        expand: true,
                        cwd: 'theme/source',
                        src: ['*.scss'],
                        dest: 'theme',
                        ext: '.css'
                    }
                ]
            }
        },

        connect: {
            server: {
                options: {
                    port: port,
                    base: base,
                    livereload: true,
                    open: true
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            js: {
                files: ['Gruntfile.js'],
                tasks: 'js'
            },
            theme: {
                files: ['theme/source/*.scss'],
                tasks: 'css-themes'
            },
            html: {
                files: ['index.html']
            },
            markdown: {
                files: ['md/*.md']
            }
        }

    });

    // Dependencies
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task
    grunt.registerTask('default', ['serve']);

    // Serve presentation locally
    grunt.registerTask('serve', ['sass','connect', 'watch']);

};
