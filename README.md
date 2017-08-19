[create]:https://github.com/RapidSoftwareSolutions/Marketplace-GoogleTranslate-Package/blob/master/instructions/create.png?raw=true
[enable]:https://github.com/RapidSoftwareSolutions/Marketplace-GoogleTranslate-Package/blob/master/instructions/enable.png?raw=true

[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/GoogleTranslate/functions?utm_source=RapidAPIGitHub_GoogleTranslateFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# Google Translate Package
This package allows you to translates a string of text from one language to another.

## How to get `apiKey`:
 0. [Go to the projects page](https://console.cloud.google.com/iam-admin/projects)
 1. Select or create a Cloud Platform Console project.
 ![Creating project][create]
 2. [Enable billing](https://support.google.com/cloud/answer/6293499#enable-billing) for your project.
 3. Click ***Continue*** to enable the Translate API and any related services.
 4. On the ***Credentials*** page, get an ***API key*** (select Browser key when prompted). _Note: If you have an existing API key, you can use that key._
 5. Go to the [translate api overview](https://console.cloud.google.com/apis/api/translate/overview) and press the "Enable" button.
 
 ![Enable API][enable] 

## GoogleTranslate.translate
Translate `string` from `sourceLanguage` to `targetLanguage`

| Field            | Type     | Description  |
| -------------    |-------------     | -----|
| `apiKey`         |string  | Required: The api key obtained from Google Cloud. |
| `string`         |string  | Required: The string to translate. |
| `targetLanguage` |string  | Required: The ISO 639-1 language code to translate the input to. [All supported languages](https://cloud.google.com/translate/docs/languages)|
| `sourceLanguage` |string  | The ISO 639-1 language code the source input is written in. [All supported languages](https://cloud.google.com/translate/docs/languages)|

#### Request example
```json
{
	"apiKey": "XXXXXXX",
	"string": "Hello",
	"sourceLanguage": "en",
	"targetLanguage": "es"
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to": "Hola"
		}
	}
}
```

## GoogleTranslate.translateAutomatic
Translate `string` from `sourceLanguage` to target language automatically

| Field            | Type     | Description  |
| -------------    |-------------     | -----|
| `apiKey`         |string  | Required: The api key obtained from Google Cloud. |
| `string`         |string  | Required: The string to translate. |
| `targetLanguage` |string  | Required: The ISO 639-1 language code to translate the input to. [All supported languages](https://cloud.google.com/translate/docs/languages) |

#### Request example
```json
{
	"apiKey": "XXXXXXX",
	"string": "Hello",
	"targetLanguage": "es"
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to": "Hola"
		}
	}
}
```

## GoogleTranslate.detectLanguage
Detect language of `string`

| Field            | Type     | Description  |
| -------------    |-------------     | -----|
| `apiKey`         |string  | Required: The api key obtained from Google Cloud. |
| `string`         |string  | Required: The string to translate. |

#### Request example
```json
{
	"apiKey": "XXXXXXX",
	"string": "Hello",
}
```
#### Response example
```json
{
	"callback": "success",
	"contextWrites": {
		"#": {
			"to": "en"
		}
	}
}
```
