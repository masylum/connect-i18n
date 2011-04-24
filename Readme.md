# Connect i18n middleware

Accept-languages header parser middleware

    npm install 'connect-i18n'

    var i18n = require('connect-i18n');
    app.use(i18n({default_locale: 'es-es'}));

    console.log(req.locales);

## options

* default_locale: Sets your default locale

## test

    make
