/**
 * Module dependencies.
 */

var queryString = require('querystring');

/**
 * Extracts locales from accept language headers
 *
 * @return {Function}
 * @api public
 */

module.exports = function i18n(options, callback) {

  options = options || {};

  if (!options.default_locale) {
    options.default_locale = 'en_us';
  }

  return function i18n(req, res, next) {
    var acceptLanguage = req.headers['accept-language'],
        locales = [];

    if (acceptLanguage) {
      acceptLanguage.split(',').forEach(function (lang) {
        locales.push(lang.split(';', 1)[0].toLowerCase());
      });

      req.locales = locales;
    } else {
      req.locales = [options.default_locale];
    }

    callback(req.locales);
    next();
  };
};
