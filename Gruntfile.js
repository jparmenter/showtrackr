'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      client: {
        options : {
          jshintrc: 'public/javascripts/.jshintrc'
        },
        src: ['public/javascripts/**/*.js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/lib/**/*.js']
      },
      all: ['Gruntfile.js', 'server.js', 'lib/**/*.js']
    },
    mochaTest: {
      options: {
        require: 'server.js'
      },
      src: ['test/lib/**/*.js']
    },
    env: {
      test: {
        NODE_ENV: 'test'
      }
    },
    less: {
      development: {
        files: {
          'public/stylesheets/style.css': 'public/stylesheets/less/style.less'
        }
      },
      production: {
        options: {
          paths: ['assets/css'],
          cleancss: true,
          modifyVars: {
            imgPath: 'http://mycdn.com/path/to/images',
            bgColor: 'red'
          }
        },
        files: {
          'path/to/result.css': 'path/to/source.less'
        }
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'env:test', 'mochaTest']);
  grunt.registerTask('build', ['less:development']);
};
