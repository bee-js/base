module.exports = {
  options: {
    timeout: 3000,
    ignoreLeaks: false,
    ui: 'bdd',
    reporter: 'dot'
  },

  all: { src: 'test/specs/*.js' },
  util: { src: 'test/specs/utilSpec.js' },
  promise: { src: 'test/specs/promiseSpec.js' },
  qs: { src: 'test/specs/querystringSpec.js' }
};
