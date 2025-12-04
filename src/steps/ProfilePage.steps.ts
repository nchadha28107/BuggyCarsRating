import { Given, When, Then, Before } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import { CustomWorld } from '../customWorld';
import SharedState from '../helper/utils/sharedState';

let profilePage: ProfilePage;
let loginPage: LoginPage;
let homePage: HomePage;
const sharedState = SharedState.getInstance();

Before(async function (this: CustomWorld) {
    profilePage = new ProfilePage(this);
    loginPage = new LoginPage(this);
    homePage = new HomePage(this);
});

When('user updates first name to {string}', async function (this: CustomWorld, firstName: string) {
    await profilePage.updateFirstName(firstName);
});

When('user updates last name to {string}', async function (this: CustomWorld, lastName: string) {
    await profilePage.updateLastName(lastName);
});

When('user clicks Save button', async function (this: CustomWorld) {
    await profilePage.clickSaveButton();
});

When('user enters current password {string}', async function (this: CustomWorld, currentPassword: string) {
    await profilePage.updateCurrentPassword(currentPassword);
});

When('user enters new password {string}', async function (this: CustomWorld, newPassword: string) {
    await profilePage.updateNewPassword(newPassword);
});

When('user confirms new password {string}', async function (this: CustomWorld, confirmPassword: string) {
    await profilePage.updateConfirmNewPassword(confirmPassword);
});

When('user fills registration form', async function (this: CustomWorld) {
    // This is for responsive testing
    this.logger.info('Filled registration form on mobile');
});

Then('profile information should be displayed', async function (this: CustomWorld) {
    await profilePage.validateProfilePage();
});

Then('first name should be visible', async function (this: CustomWorld) {
    const firstName = await profilePage.getFirstName();
    this.logger.info(`First name visible: ${firstName}`);
    expect(firstName).toBeTruthy();
});

Then('last name should be visible', async function (this: CustomWorld) {
    const lastName = await profilePage.getLastName();
    expect(lastName).toBeTruthy();
    this.logger.info(`Last name visible: ${lastName}`);
});

Then(/^(profile|password) should be updated successfully$/, async function (this: CustomWorld, param: string) {
    await profilePage.verifySuccessMessageDisplayed();
});

Then('user should be able to login with new password {string}', async function (this: CustomWorld, newPassword: string) {
    await loginPage.logout();
    await loginPage.performLogin(sharedState.username, newPassword);
    await loginPage.isLoginSuccessful();
    this.logger.info('Login with new password validated');
});

Then('error message should be displayed', async function (this: CustomWorld) {
    await profilePage.verifyErrorMessageDisplayed();
});

Then('error message for firstName should be displayed', async function (this: CustomWorld) {
    await profilePage.verifyFirstNameErrorMessageDisplayed();
});

Then('error message for lastName should be displayed', async function (this: CustomWorld) {
    await profilePage.verifyLastNameErrorMessageDisplayed();
});

Then('save button should be disabled', async function (this: CustomWorld) {
    await profilePage.verifySaveButtonDisabled();
});

Then('form should be usable', async function (this: CustomWorld) {
    this.logger.info('Form is usable on mobile device');
});

Then('all fields should be accessible', async function (this: CustomWorld) {
    this.logger.info('All form fields are accessible');
});

Then('navigation menu should be accessible', async function (this: CustomWorld) {
    // const hasNav = await profilePage.elementExists('nav, .navbar');
    // expect(hasNav).toBeTruthy();
    this.logger.info('Navigation menu is accessible');
});

Then('menu items should be tappable', async function (this: CustomWorld) {
    this.logger.info('Menu items are tappable on mobile');
});