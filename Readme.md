# Connect i18n middleware

Almost inexistant middleware that checks the accept-languages
header and adds them to the request.

    npm install 'connect-i18n'

    var i18n = require('connect-i18n');
    app.use(i18n({default_locale: 'es-es'}));

    console.log(req.locales);

## options

* default_locale: Sets your default locale

## callback

Hook to implement your own behaviour after parsing the accept-languages header.
