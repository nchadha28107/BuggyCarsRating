import { Given, Before } from '@cucumber/cucumber';
import LogoutPage from '../pages/LogoutPage';
import { CustomWorld } from '../customWorld';

let logoutPage: LogoutPage;

Before(async function (this: CustomWorld) {
    logoutPage = new LogoutPage(this);
});

// Given('user should land on Logout', async () => {
//     await logoutPage.validatePage();
// });

// Given('user selects login back button', async () => {
//     await logoutPage.selectLoginBackButton();
// });