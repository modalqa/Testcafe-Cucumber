const { Given, When, Then } = require('cucumber');
const Layout = require('../page-objects/layout');


When('lender click sidebar menu', async function () {
    await Layout.sidebar.clickSidebarMenu();
});

When('lender click logout', async function () {
    await Layout.sidebar.clickLogout();
});

