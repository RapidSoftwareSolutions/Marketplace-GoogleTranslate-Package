const _ = require('../lib/functions');
const GTranslate = require('@google-cloud/translate');

module.exports = (req, res) => {

    /* Get user parameters and prepare it */
    let { apiKey, string, to="to" } = req.body.args;

    /* Prepare RapidAPI Object for response */
    var r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!apiKey || !string) {
        _.echoBadEnd(r, res);
        return;
    }

    /* Google Cloud SDK Initialization */
    let gt = GTranslate({
        key: apiKey
    });

    /* Send raw to Google Translate */
    gt.detect(string, (err, results) => {
        if(err) {
            r.contextWrites[to] = JSON.stringify(err);
            r.callback = 'error';
        }
        else {
            r.contextWrites[to] = results['language'];
            r.callback = 'success';
        }

        res.status(200).send(r);
    });
};
