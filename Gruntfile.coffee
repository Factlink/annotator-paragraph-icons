# global config:true, file:true, task:true, module: true

path = require 'path'
fs = require 'fs'

module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    clean:
      before: ['dist']
      after: ['temp']
    coffee:
      build:
        files: [
          { src: ['*.coffee'], cwd: 'app', dest: 'temp', ext: '.js', expand: true }
        ]
    concat:
      build:
        src: [
          'wrap/before.js'
          'node_modules/tether/tether.min.js'
          'temp/*.js'
          'wrap/after.js'
        ]
        dest: 'dist/main.js'
    uglify:
      build:
        files:
          'dist/main.min.js': 'dist/main.js'
    sass:
      build:
        files:
          'dist/main.css': 'app/main.scss'
    cssmin:
      build:
        files:
          'dist/main.min.css': 'dist/main.css'

  grunt.registerTask 'build', [
    'clean:before'
    'coffee'
    'concat'
    'uglify'
    'sass'
    'cssmin'
    'clean:after'
  ]

  grunt.registerTask 'default', ['build']

  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-cssmin'
