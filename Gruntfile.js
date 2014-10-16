'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['/public/views/**']
      },
      js: {
        files: ['gruntfile.js', 'server.js', 'lib/**/*.js', 'public/js/**', 'test/lib/**/*.js', 'test/client/**/*.js'],
        tasks: ['jshint']
      },
      css: {
        files: ['public/less/*.less'],
        tasks: ['less']
      }
    },
    jshint: {
      options: {
        jshintrc: true,
        reporter: require('jshint-stylish')
      },
      all: [
      'Gruntfile.js',
      'server.js',
      'lib/**/*.js',
      'public/js/**/*.js',
      'test/client/**/*.js',
      'test/lib/**/*.js'
      ]
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          args: [],
          ignoredFiles: ['public/**'],
          watchedExtensions: ['js'],
          delayTime: 1,
          env: {
            PORT: 3000
          },
          cwd: __dirname
        }
      }
    },
    concurrent: {
      tasks: ['nodemon', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    },
    mochaTest: {
      options: {
        require: 'server.js'
      },
      src: ['test/lib/**/*.js']
    },
    karma: {
      unit: {
        configFile: 'test/client/karma.conf.js'
      }
    },
    env: {
      test: {
        NODE_ENV: 'test'
      },
      coverage: {
        NODE_ENV: 'test',
        APP_SIR_FOR_CODE_COVERAGE: '../test/coverage/instrument/app/'
      }
    },
    less: {
      development: {
        files: {
          'public/css/style.css': 'public/less/style.less'
        }
      // },
      // production: {
      //   options: {
      //     paths: ['assets/css'],
      //     cleancss: true,
      //     modifyVars: {
      //       imgPath: 'http://mycdn.com/path/to/images',
      //       bgColor: 'red'
      //     }
      //   },
      //   files: {
      //     'path/to/result.css': 'path/to/source.less'
      //   }
      }
    },
    clean: {
      coverage: {
        src: ['test/coverage/']
      }
    },
    instrument: {
      files: 'lib/**/*.js',
      options: {
        lazy: true,
        basePath: 'test/coverage/instrument'
      }
    },
    storeCoverage: {
      options: {
        dir: 'test/coverage/reports'
      }
    },
    makeReport: {
      src: 'test/coverage/reports/**/*.json',
      options: {
        type: 'locv',
        dir: 'test/coverage/reports',
        print: 'detail'
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'env:test', 'mochaTest', 'karma:unit']);
  grunt.registerTask('default', ['jshint', 'concurrent', 'less:development']);
  grunt.registerTask('coverage', ['jshint', 'clean', 'env:coverage', 'instrument',
    'mochaTest', 'storeCoverage', 'makeReport']);
};
