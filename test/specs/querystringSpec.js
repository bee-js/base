define(function(require) {
  /* Stringify */
  require('specs/querystringSpec/stringify/base');

  require('specs/querystringSpec/stringify/arrays');

  require('specs/querystringSpec/stringify/objects');

  require('specs/querystringSpec/stringify/options');

  /* Parse */
  require('specs/querystringSpec/parse/base');

  require('specs/querystringSpec/parse/coercion');

  require('specs/querystringSpec/parse/preparsing');

  require('specs/querystringSpec/parse/arrays');

  require('specs/querystringSpec/parse/objects');

  require('specs/querystringSpec/parse/options');
});
