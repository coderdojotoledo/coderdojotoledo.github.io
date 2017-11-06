module.exports = function(grunt) {

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    env: process.env
  };

  function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/,'');
      object[key] = require(path + option);
    });

    return object;
  }

  grunt.util._.extend(config, loadConfig('./config/grunt/options/'));

  grunt.initConfig(config);

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-jekyll");
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.loadTasks('./config/grunt/tasks/');
};
