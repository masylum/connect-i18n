var queryString = require('querystring');

/**
 * Parse from Accept-language header
 *
 * @return {Function}
 * @api public
 */

module.exports = function (options) {

  options = options || {};

  if (!options.default_locale) {
    options.default_locale = 'en-us';
  }

  return function i18n(req, res, next) {
    var accept_language = req.headers['accept-language'],
        tokens = [],
        locales = [];

    if (accept_language) {
      accept_language.split(',').forEach(function (lang) {
        locales.push(lang.split(';', 1)[0].toLowerCase());
      });

      req.locales = locales;
    } else {
      req.locales = [options.default_locale];
    }

    next();
  };
};
