const { Given, When, Then } = require('cucumber');

const LoginPage = require('../page-objects/login');
const DashboardPage = require('../page-objects/dashboard');
const Danai = require('../page-objects/mendanai');

Then('lender will see lender dashboard page', async function(){
    await testController.expect(DashboardPage.getProfileTitle()).contains('Pendana');
});

When('lender click button mulai Mendanai', async function(){
    await testController.click(Danai.buttonMulaiMendanai());
});



