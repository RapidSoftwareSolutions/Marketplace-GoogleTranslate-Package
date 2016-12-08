module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'GoogleTranslate',
        "tagline": "Google Translate API Wrapper",
        "keywords": ["API", "English", "Google", "language", "languages", "translate", "translation", "travel"],
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
                    required: true
                },
                {
                    name: "string",
                    type: "String",
                    info: "The string to translate.",
                    required: true
                },
                {
                    name: "targetLanguage",
                    type: "String",
                    info: "The ISO 639-1 language code to translate the input to.",
                    required: true
                }
                {
                    name: "sourceLanguage",
                    type: "String",
                    info: "The ISO 639-1 language code the source input is written in.",
                    required: false
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
        },

        {
            "name":"translateAutomatic",
            "args":[
                {
                    name: "apiKey",
                    type: "credentials",
                    info: "The api key obtained from Google Cloud.",
                    required: true
                },
                {
                    name: "string",
                    type: "String",
                    info: "The string to translate.",
                    required: true
                },
                {
                    name: "targetLanguage",
                    type: "String",
                    info: "The ISO 639-1 language code to translate the input to.",
                    required: true
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
                    type: "credentials",
                    info: "The api key obtained from Google Cloud.",
                    required: true
                },
                {
                    name: "string",
                    type: "String",
                    info: "The string to detect.",
                    required: true
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
