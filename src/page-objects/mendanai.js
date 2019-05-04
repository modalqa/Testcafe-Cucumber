const { Selector } = require('testcafe');

exports.buttonMulaiMendanai = async function () {
    await testController.click(Selector('Span').withText('Mulai Mendanai'));
  };