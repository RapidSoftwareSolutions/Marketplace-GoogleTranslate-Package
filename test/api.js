let assert = require('chai').assert;
let request = require('supertest-as-promised');

let app = require('../index');
let apiKey = 'AIzaSyCDogEcpeA84USVXMS471PDt3zsG-caYDM', 
  string = 'Hello', 
  sourceLanguage = 'en', 
  targetLanguage = 'es', 
  to = 'to';

describe('/translate function', () => {

  it('should translate a sting of text from one language to another', () => {

    return request(app)
      .post('/api/marketplace-googletranslate-package/translate')
      .send({args: { apiKey, string, sourceLanguage, targetLanguage, to }})
      .expect(200)
      .then((data) => {
        assert.equal(data.body.contextWrites[to], 'Hola');
      });
  });
});