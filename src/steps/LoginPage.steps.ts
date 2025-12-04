import { Given, When, Then, Before } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import RegistrationPage from '../pages/RegistrationPage';
import { CustomWorld } from '../customWorld';
import SharedState from '../helper/utils/sharedState';
import { generateRandomUsername, generateRandomPassword } from '../helper/utils/utils';

let loginPage: LoginPage;
let homePage: HomePage;
let registrationPage: RegistrationPage;
const sharedState = SharedState.getInstance();

Before(async function (this: CustomWorld) {
    loginPage = new LoginPage(this);
    homePage = new HomePage(this);
    registrationPage = new RegistrationPage(this);
});

Given('user is not logged in', async function (this: CustomWorld) {
    if (await loginPage.isUserLoggedIn()) {
        await loginPage.logout();
    }
    this.logger.info('Ensured user is not logged in');
});

When(/^user attemps login with (empty|valid|invalid) username and (empty|valid|invalid) password$/, async function (this: CustomWorld, usernameValidity: string, passwordValidity: string) {
    // Determine username
    let username: string;
    if (usernameValidity === 'empty') {
      username = '';
    } else if (usernameValidity === 'valid') {
      username = sharedState.username; // or your valid username
    } else {
      username = generateRandomUsername(); // or invalid username logic
    }

    // Determine password
    let password: string;
    if (passwordValidity === 'empty') {
      password = '';
    } else if (passwordValidity === 'valid') {
      password = sharedState.password; // or your valid password
    } else {
      password = generateRandomPassword(); // or invalid password logic
    }

    await loginPage.performLogin(username, password);
});

When('user clicks on Logout link', async function (this: CustomWorld) {
    await loginPage.logout();
});

When('user logs in again with same credentials', async function (this: CustomWorld) {
    await loginPage.performLogin(sharedState.username, sharedState.password);
});

Then('user should be logged in successfully', async function (this: CustomWorld) {
    await loginPage.isLoginSuccessful();
});

Then('user should see invalid credentials error', async function (this: CustomWorld) {
    await loginPage.errorMessageDisplayed();
});

Then('user should remain on login page', async function (this: CustomWorld) {
    await loginPage.validateURL();
});

Then('user should see login field validation error', async function (this: CustomWorld) {
    await loginPage.validateUsernameMessage();
});

Then('user should be logged out successfully', async function (this: CustomWorld) {
    const isLoggedIn = await loginPage.isUserLoggedIn();
    expect(isLoggedIn).toBeFalsy();
    this.logger.info('User logged out successfully');
});


Given('user navigates to profile page', async function (this: CustomWorld) {
    await loginPage.navigateToProfile();
});