requirejs.config({
  baseUrl: '../',
  paths: {
    'base':  'src',
    'specs': 'test/specs'
  },
  use: {
    mocha: {
      attach: 'mocha'
    }
  },
  urlArgs: /debug\=1/.test(window.location.search) ? '' : 'bust=' +  (new Date()).getTime()
});

mocha.setup({
  ui: 'bdd',
  ignoreLeaks: false,
  timeout: 500
});

chai.expect.fail = function(msg) {
  throw new chai.AssertionError(msg);
};

window.expect = chai.expect;
