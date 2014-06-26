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
      locales = [];

    if (accept_language) {
      accept_language.split(',').forEach(function (lang) {
        locales.push(lang.split(';', 1)[0].toLowerCase());
      });

      // We may have an array of "handled locales" (i.e. ['en', 'fr'])
      if (options.handled_locales) {
        var filteredLocales = [];
        locales.forEach(function (locale) {
          if (options.handled_locales.indexOf(locale) > -1) {
            filteredLocales.push(locale);
          }
        });
        locales = filteredLocales;
      }

      req.locales = locales;
    }

    if ((!req.locales || req.locales.length === 0) && options.default_locale) {
      req.locales = [options.default_locale];
    }

    next();
  };
};
