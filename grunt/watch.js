module.exports = {
  options: {
    atBegin: true
  },
  util: {
    files: ['src/util.js', 'test/specs/utilSpec/*.js', 'test/specs/utilSpec.js'],
    tasks: ['jshint:util', 'simplemocha:util']
  },
  promise: {
    files: ['src/promise.js', 'test/specs/promiseSpec/*.js', 'test/specs/promiseSpec.js'],
    tasks: ['jshint:promise', 'simplemocha:promise']
  },
  sq: {
    files: ['src/querystring.js', 'test/specs/querystringSpec/*.js', 'test/specs/querystringSpec.js'],
    tasks: ['jshint:qs', 'simplemocha:qs']
  }
};
