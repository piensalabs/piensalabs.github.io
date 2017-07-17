module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');


    grunt.initConfig({

        less: {
          development: {
            files: {
              'tmp/styles.css': ['css/**/*.less']
            }
          },
          production: {
            options: {
              plugins: [
                new (require('less-plugin-clean-css'))()
              ],
            },
            files: {
              'build/styles.min.css': ['css/**/*.less']
            }
          }
        },
        watch: {
          options: {
            livereload: true
          },
          build: {
            files: ['css/**/*', 'js/**/*'],
            tasks: ['dev']
          }
        },
        clean: ['tmp', 'build']
    });



    grunt.registerTask('css', ['less:development', 'less:production']);

    grunt.registerTask('dev', ['clean', 'less:development']);

    grunt.registerTask('dev-watch', ['dev', 'watch']);

    grunt.registerTask('build', ['clean', 'less:production']);
};
