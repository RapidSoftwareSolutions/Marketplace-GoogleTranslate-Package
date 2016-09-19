module.exports.do = function(req, res){
    /* When sending GET request to api/Twitter, return the metadata of the package */
    res.status(200).send({
        'package': 'GoogleTranslate',
        "tagline": "Google Translate API Wrapper",
        "description": "This blocks allows you to translates a sting of text from one language to another",
        'image': 'https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png',
        'repo': 'https://github.com/RapidSoftwareSolutions/marketplace-googletranslate-package',
        'accounts': {
            'domain': 'google.com',
            'credentials': [
                'apiKey'
            ]
        },
        'blocks': [{
            "name":"translate",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Google Cloud.",
                },
                {
                    name: "string",
                    type: "String",
                    info: "The string to translate.",
                },
                {
                    name: "sourceLanguage",
                    type: "String",
                    info: "The ISO 639-1 language code the source input is written in."
                },
                {
                    name: "targetLanguage",
                    type: "String",
                    info: "The ISO 639-1 language code to translate the input to."
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },

        {
            "name":"translateAutomatic",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from Google Cloud.",
                },
                {
                    name: "string",
                    type: "String",
                    info: "The string to translate.",
                },
                {
                    name: "targetLanguage",
                    type: "String",
                    info: "The ISO 639-1 language code to translate the input to."
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },

        {
            "name":"detectLanguage",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from Google Cloud.",
                },
                {
                    name: "string",
                    type: "String",
                    info: "The string to detect.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }]
    })
};
