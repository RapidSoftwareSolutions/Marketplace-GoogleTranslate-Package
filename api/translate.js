/* Import Google Tranlsate SDK */
const GTranslate = require('@google-cloud/translate');

module.exports.translate = (req, res) => {

    /* Get user parameters and prepare it */
    let { apiKey, string, sourceLanguage, targetLanguage, to } = req.body.args;

    /* Prepare RapidAPI Object for response */
    var r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!apiKey || !targetLanguage) {
        echoBadEnd(r, res);
        return;
    }

    /* Google Cloud SDK Initialization */
    let gt = GTranslate({
        key: apiKey
    });

    /* Send raw to Google Translate */
    gt.translate(
        string,
        {
            from: sourceLanguage,
            to:   targetLanguage
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

function echoBadEnd(r, res) {
    r.contextWrites[to] = 'Error: Fill in required fields to use the Translate API.';
    r.callback = 'error';

    res.status(200).send(r);
}