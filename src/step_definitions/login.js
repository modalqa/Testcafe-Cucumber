const { Given, When, Then } = require('cucumber');
const LoginPage = require('../page-objects/login');


Given('lender is at p2p login page', async function () {
    await LoginPage.navigateToThisPage();
});

Then('lender will see p2p login page', async function () {
   await testController.expect(LoginPage.getPageTitle()).contains('Masuk');
});

When(/^lender login as "([^"]*)"$/, async function (user) {
  let username = '';
  let password = '';
  if (user === 'ACTIVE_LENDER') {
    username = 'serly@mail16685.com';
    password = 'morak123';
  } else if (user === 'INVALID_LENDER') {
    username = 'harryanto123@mailinator.com';
    password = 'morak123';
  }

  await LoginPage.login(username, password);
});

Then('lender will see alert invalid lender', async function () {
  await testController.expect(LoginPage.getAlertMessage()).contains('Email tidak ditemukan');
});
