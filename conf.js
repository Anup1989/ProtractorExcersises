exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['formSubmittion.js'],
    capabilities: {
        'browserName': 'chrome'
      }
  };