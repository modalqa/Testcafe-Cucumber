const { Selector } = require('testcafe');

exports.getProfileTitle = function () {
  return Selector('h5').with({boundTestRun: testController}).withAttribute('class', 'profile-title').textContent
};

