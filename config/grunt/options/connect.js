/**
 * Creates a webserver as build folder as the base.
 */

module.exports = {
  server: {
    options: {
      port: 9000,
      base: '.test',
      keepalive: true,
      open: {
        target: 'http://localhost:9000'
      }
    }
  }
};
