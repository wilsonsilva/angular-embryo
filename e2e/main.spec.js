'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('includes a header', function() {
    expect(page.h1El.getText()).toBe('Embryo incubating...');
  });

});
