"use strict";

/** IMPORTS **/
const express       = require('express'),
    bodyParser      = require('body-parser');

/** SET UP **/
//If ran in production - use enviroment PORT. In development, default to 8080
const PORT = process.env.PORT || 8080;
//The package name
global.PACKAGE_NAME = "marketplace-googletranslate-package";

//Initialize web server
const app = express();
app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));

/** ENDPOINT **/

//A metadata
app.get(`/api/${PACKAGE_NAME}`, require('./api/metadata.js').do);

app.post(`/api/${PACKAGE_NAME}/translate`, require('./api/translate.js').translate);
app.post(`/api/${PACKAGE_NAME}/translateAutomatic`, require('./api/translate.js').translate);
app.post(`/api/${PACKAGE_NAME}/detectLanguage`, require('./api/translate.js').detect);

/** START LISTENING **/
app.listen(PORT);

module.exports = app;