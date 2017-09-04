'use strict';
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, Then}) {
  
    Given('I am on app page', function() {
      browser.url(browser.options.baseUrl);
    });
  
    Then('I expect to see text {stringInDoubleQuotes} displaying', function(text) {
      const actualText = browser.getText(".container")
      expect(text).to.equal(actualText,`Expected text ${actualText} is displaying`);
    });
  });