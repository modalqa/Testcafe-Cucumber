const { Selector } = require('testcafe');


exports.sidebar = {
  clickSidebarMenu: async function () {
    await testController.click(
      Selector('span').withText('Menu')
    );
  },
  clickLogout: async function () {
    await testController.click(
      Selector('a').with({boundTestRun: testController}).withAttribute('class', 'nav-link').withText('Logout')
    );
  }
};
