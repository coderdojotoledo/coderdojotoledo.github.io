/**
 * Watches specified files and runs the appropriate task when they're changed.
 */

module.exports = {
  src: {
    files: [
      '!./node_modules',
      '!./.test',
      '!./.sass-cache',
      './src/**/*'
    ],
    tasks: ['default']
  }
};
