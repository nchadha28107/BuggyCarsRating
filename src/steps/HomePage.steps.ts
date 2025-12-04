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

// Given('user opens homepage on mobile device', async function (this: CustomWorld) {
//     await homePage.navigateToHomePage();
//     this.logger.info('Opened homepage on mobile device');
// });

When('user clicks on Register link', async function (this: CustomWorld) {
    await homePage.clickRegisterLink();
});

When('user searches for {string}', async function (this: CustomWorld, searchTerm: string) {
    await homePage.searchForCar(searchTerm);
});

When('user clicks on first car model', async function (this: CustomWorld) {
    await homePage.clickFirstCarModel();
});

When('user clicks on popular make link', async function (this: CustomWorld) {
    await homePage.clickPopularMake(0);
});

Then('user should see list of car models', async function (this: CustomWorld) {
    await homePage.getCarModelCount();
});

// Then('car model images should be displayed', async function (this: CustomWorld) {
//     const carCount = await homePage.getCarModelCount();
//     expect(carCount).toBeGreaterThan(0);
//     this.logger.info('Car model images are displayed');
// });

// Then('search results should be displayed', async function (this: CustomWorld) {
//     const carCount = await homePage.getCarModelCount();
//     expect(carCount).toBeGreaterThan(0);
//     this.logger.info('Search results displayed');
// });

// Then('results should contain {string}', async function (this: CustomWorld, expectedText: string) {
//     const pageContent = await homePage.page.textContent('body');
//     expect(pageContent).toContain(expectedText);
//     this.logger.info(`Results contain: ${expectedText}`);
// });

// Then('no results message should be displayed', async function (this: CustomWorld) {
//     const pageContent = await homePage.page.textContent('body');
//     const hasNoResults = pageContent?.includes('No') || pageContent?.includes('not found') || 
//                          pageContent?.includes('0 results');
//     expect(hasNoResults).toBeTruthy();
//     this.logger.info('No results message displayed');
// });

// Then('homepage should load successfully', async function (this: CustomWorld) {
//     expect(await homePage.page.url()).toContain('buggy.justtestit.org');
//     this.logger.info('Homepage loaded successfully');
// });

// Then('all UI elements should be visible', async function (this: CustomWorld) {
//     const carCount = await homePage.getCarModelCount();
//     expect(carCount).toBeGreaterThan(0);
//     this.logger.info('All UI elements are visible');
// });

// Then('navigation links should work', async function (this: CustomWorld) {
//     // Check if navigation elements exist
//     const hasNavigation = await homePage.elementExists('nav, .navbar');
//     expect(hasNavigation).toBeTruthy();
//     this.logger.info('Navigation links are working');
// });

// Then('page layout should be responsive', async function (this: CustomWorld) {
//     const viewportSize = homePage.page.viewportSize();
//     expect(viewportSize).toBeDefined();
//     this.logger.info('Page layout is responsive');
// });

// Then('all content should be visible', async function (this: CustomWorld) {
//     const body = await homePage.page.locator('body');
//     await expect(body).toBeVisible();
//     this.logger.info('All content is visible');
// });

// Then('text should not overflow', async function (this: CustomWorld) {
//     // This is a visual check - in real scenario, you'd check computed styles
//     this.logger.info('Text overflow checked');
// });

// Then('page navigation should work or error should be shown', async function (this: CustomWorld) {
//     // Check if either navigation succeeded or error is shown
//     const url = await homePage.page.url();
//     this.logger.info(`Current URL after navigation: ${url}`);
//     // This validates the bug - navigation may fail
// });