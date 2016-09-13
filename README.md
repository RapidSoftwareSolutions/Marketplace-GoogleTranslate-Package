# Google Translate API Wrapper
This blocks allows you to translates a sting of text from one language to another

## /translate
Translate `string` from `sourceLanguage` to `targetLanguage`

* `apiKey` (string): The api key obtained from Google Cloud.
* `string` (string): The string to translate.
* `sourceLanguage` (string): The ISO 639-1 language code the source input is written in.
* `targetLanguage` (string): The ISO 639-1 language code to translate the input to.

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

## /translateAutomatic
Translate `string` from `sourceLanguage` to target language automatically

* `apiKey` (string): The api key obtained from Google Cloud.
* `string` (string): The string to translate.
* `targetLanguage` (string): The ISO 639-1 language code to translate the input to.

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

## /detectLanguage
Detect language of `string`

* `apiKey` (string): The api key obtained from Google Cloud.
* `string` (string): The string to translate.

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