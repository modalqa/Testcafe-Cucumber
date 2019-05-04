const { Given, When, Then } = require('cucumber');
const DashboardPage = require('../page-objects/dashboard');
const Layout = require('../page-objects/layout');


Then('lender will see lender dashboard page', async function () {
    await testController.expect(DashboardPage.getProfileTitle()).contains('Pendana');
});

When('lender click sidebar menu and click logout', async function () {
    await Layout.sidebar.clickLogout();
});
  
