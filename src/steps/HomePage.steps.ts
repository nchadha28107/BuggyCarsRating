import { Given, When, Then, Before } from '@cucumber/cucumber';
import HomePage from '../pages/HomePage';
import { CustomWorld } from '../customWorld';

let homePage: HomePage;

Before(async function (this: CustomWorld) {
    homePage = new HomePage(this);
});

Given('user navigates to Buggy Cars homepage', async function (this: CustomWorld) {
    await homePage.navigateToHomePage();
});

When('user clicks on Register link', async function (this: CustomWorld) {
    await homePage.clickRegisterLink();
});

Then('user should see list of car models', async function (this: CustomWorld) {
    await homePage.getCarModelCount();
});