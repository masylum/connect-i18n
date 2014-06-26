# Connect i18n middleware

Accept-languages header parser middleware

    npm install 'connect-i18n'

    var i18n = require('connect-i18n');
    app.use(i18n({default_locale: 'es-es'}));
    // or, with a "handled locales" Array:
    app.use(i18n({default_locale: 'es-es', handled_locales: ['es', 'fr', 'en']}));

    console.log(req.locales);

## options

* default_locale: Sets your default locale
* handled_locales: If set, only locales defined by the user browser and found in this Array will be present in `req.locales`
