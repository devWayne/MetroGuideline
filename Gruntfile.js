  module.exports = function(grunt) {  
  
  // Project configuration.  
  grunt.initConfig({  
    pkg: grunt.file.readJSON('package.json'), 
    concat : {
            css : {
                src: ['src/css/*.css'],
                dest: 'dist/css/dpmetro.css'
            }
        }, 
    cssmin: {
            css: {
                src:'dist/css/dpmetro.css',
                dest:'dist/css/dpmetro-min.css'
            }

        }
  });  
  
  // Load the plugin that provides the "uglify" task.  
  grunt.loadNpmTasks('grunt-contrib-concat');  
  grunt.loadNpmTasks('grunt-css');
  
  // Default task(s).  
  grunt.registerTask('default', ['concat','cssmin']);  
  
};  