  module.exports = function(grunt) {

    // Project configuration.  
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
        css: {
          src: ['src/less/*.less'],
          dest: 'dist/less/dpmetro.less'
        }
      },

      less: {
        development: {
          files: {
            "dist/css/dpmetro.css": "dist/less/dpmetro.less"
          }
        }
      },

      cssmin: {
        css: {
          src: 'dist/css/dpmetro.css',
          dest: 'dist/css/dpmetro-min.css'
        }
      },
      watch: {
        files: ["src/less/*"],
        tasks: ["concat", 'less', 'cssmin']
      }
    });

    // Load the plugin that provides the "uglify" task.  
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).  
    grunt.registerTask('default', ['concat', 'less', 'cssmin']);

  };