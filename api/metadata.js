module.exports.do = function(req, res){
    /* When sending GET request to api/Twitter, return the metadata of the package */
    res.status(200).send({
        'package': 'GoogleTranslate',
        "tagline": "Google Translate API Wrapper",
        "description": "This blocks allows you to translates a sting of text from one language to another",
        'image': 'https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png',
        'repo': 'https://github.com/RapidSoftwareSolutions/marketplace-googletranslate-package',
        'blocks': [{
            "name":"translate",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from Tweeter.",
                },
                {
                    name: "translateString",
                    type: "String",
                    info: "The string to translate.",
                },
                {
                    name: "translateFrom",
                    type: "String",
                    info: "The ISO 639-1 language code the source input is written in."
                },
                {
                    name: "translateTo",
                    type: "String",
                    info: "The ISO 639-1 language code to translate the input to."
                }
            ],
        }]
    })
};