module.exports = {
  all:     ['src/**/*.js'],
  util:    ['src/util.js'],
  promise: ['src/promise.js'],
  qs:      ['src/querystring.js'], 

  options: {
    reporter: require('jshint-stylish'),
    forin:    true,
    noarg:    true,
    noempty:  true,
    bitwise:  false,
    eqeqeq:   false,
    strict:   true,
    undef:    true,
    browser:  true,
    trailing: true,
    regexp:   true,
    expr:     true,
    indent:   2,
    globals: {
      global: true,
      define: true,
      window: true,
      escape: true,
      process: true,
      unescape: true,
      setTimeout: true,
      setInterval: true,
      setImmediate: true,
      clearInterval: true
    }
  }
};
