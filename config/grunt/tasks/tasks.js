module.exports = function(grunt) {

  // Default
  grunt.registerTask("default", [
    "clean:test",
    "jekyll:test"
  ]);

  // Watch
  grunt.registerTask("watcher", [
    "watch"
  ]);

  // Connect
  // Watch
  grunt.registerTask("test-server", [
    "connect:server"
  ]);
};
