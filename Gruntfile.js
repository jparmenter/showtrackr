'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    less: {
      development: {
        files: {
          "public/stylesheets/style.css": "public/stylesheets/less/style.less"
        }
      },
      production: {
        options: {
          paths: ["assets/css"],
          cleancss: true,
          modifyVars: {
            imgPath: '"http://mycdn.com/path/to/images"',
            bgColor: 'red'
          }
        },
        files: {
          "path/to/result.css": "path/to/source.less"
        }
      }
    }
  });

  grunt.registerTask('build', ['less:development']);
}
