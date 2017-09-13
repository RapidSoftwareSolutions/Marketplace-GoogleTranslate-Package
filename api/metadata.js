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
        'steps': [
            "Go to the projects page(https://console.cloud.google.com/iam-admin/projects)",
            "Select or create a Cloud Platform Console project. Creating project",
            "Enable billing(https://support.google.com/cloud/answer/6293499#enable-billing) for your project",
            "Click Continue to enable the Translate API and any related services",
            "On the Credentials page, get an API key (select Browser key when prompted). Note: If you have an existing API key, you can use that key",
            "Go to the translate api overview(https://console.cloud.google.com/apis/api/translate/overview) and press the 'Enable' button"
        ],
        'blocks': [{
            "name":"translate",
            "description": "Translate `string` from `sourceLanguage` to `targetLanguage`",
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
                    info: "The ISO 639-1 language code to translate the input to. All supported languages: https://cloud.google.com/translate/docs/languages",
                    required: true
                },
                {
                    name: "sourceLanguage",
                    type: "String",
                    info: "The ISO 639-1 language code the source input is written in. All supported languages: https://cloud.google.com/translate/docs/languages",
                    required: false
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
            "description": "Translate `string` from `sourceLanguage` to target language automatically",
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
                    info: "The ISO 639-1 language code to translate the input to. All supported languages: https://cloud.google.com/translate/docs/languages",
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
            "description": "Detect language of `string`",
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
