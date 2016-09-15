# Google Translate Package
This package allows you to translates a string of text from one language to another.

<!--Need to add explanation on how to get API key from Google WITH SCREENSHOTS-->

## GoogleTranslate.translate
Translate `string` from `sourceLanguage` to `targetLanguage`

| Field            | Type     | Description  |
| -------------    |-------------     | -----|
| `apiKey`         |string  | The api key obtained from Google Cloud. |
| `string`         |string  | The string to translate. |
| `sourceLanguage` |string  | The ISO 639-1 language code the source input is written in. |
| `targetLanguage` |string  | The ISO 639-1 language code to translate the input to. |

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
| `apiKey`         |string  | The api key obtained from Google Cloud. |
| `string`         |string  | The string to translate. |
| `targetLanguage` |string  | The ISO 639-1 language code to translate the input to. |

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
| `apiKey`         |string  | The api key obtained from Google Cloud. |
| `string`         |string  | The string to translate. |

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
