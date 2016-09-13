/* Import Google Tranlsate SDK */
const GTranslate = require('@google-cloud/translate');

module.exports.translate = (req, res) => {

    /* Get user parameters and prepare it */
    let { apiKey, translateString, translateFrom, translateTo, to } = req.body.args;

    /* Prepare RapidAPI Object for response */
    var r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!apiKey) {
        r.contextWrites[to] = 'Error: An API key is required to use the Translate API.';
        r.callback = 'error';

        res.status(200).send(r);
        return;
    }

    /* Google Cloud SDK Initialization */
    let gt = GTranslate({
        key: apiKey
    });

    /* Send raw to Google Translate */
    gt.translate(
        translateString,
        {
            from: translateFrom,
            to:   translateTo
        }, 

        (err, translation) => {
            
            if(err) {
                r.contextWrites[to] = JSON.stringify(err);
                r.callback = 'error';
            }
            else {
                r.contextWrites[to] = translation;
                r.callback = 'success';
            }

            res.status(200).send(r);
        }
    );
};