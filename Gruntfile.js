require('amd-loader');
require('node-amd-require')({
  paths: {
    'base':  'src',
    'specs': 'test/specs'
  }
});

var chai      = require('chai');
global.expect = chai.expect;
global.sinon  = require('sinon');
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

module.exports = function(grunt) {
  require('load-grunt-config')(grunt);

  grunt.registerTask('ci', ['simplemocha:all', 'jshint:all']);
};
