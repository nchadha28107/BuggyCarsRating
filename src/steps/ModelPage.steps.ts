import { Given, When, Then, Before } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import ModelPage from '../pages/ModelPage';
import { CustomWorld } from '../customWorld';
import SharedState from '../helper/utils/sharedState';
import HomePage from '../pages/HomePage';
import OverallPage from '../pages/OverallPage';

let modelPage: ModelPage;
let homePage: HomePage;
let overallPage: OverallPage
const sharedState = SharedState.getInstance();

Before(async function (this: CustomWorld) {
    modelPage = new ModelPage(this);
    homePage = new HomePage(this);
    overallPage = new OverallPage(this);
});

Given('user navigates to {string} car model page', async function (this: CustomWorld, carName: string) {
    await homePage.clickOverallRating();
    await overallPage.selectCar(carName);
    await modelPage.validateModelPage();
    this.logger.info('Navigated to car model page');
});

When('user clicks on Vote button', async function (this: CustomWorld) {
    const voteCountBefore = await modelPage.getVoteCount();
    sharedState.setVoteCount(voteCountBefore);
    await modelPage.clickVoteButton();
    this.logger.info('Clicked on Vote button');
});

When('user posts a comment {string}', async function (this: CustomWorld, comment: string) {
    await modelPage.postComment(comment);
});

Then('vote is registered and count should increase', async function (this: CustomWorld) {
    await modelPage.validateVoteMessage();
    const voteCountAfter = await modelPage.getVoteCount();
    const voteCountBefore = sharedState.voteCount;

    expect(voteCountAfter).toBeGreaterThan(voteCountBefore);
    this.logger.info(`Vote count increased from ${voteCountBefore} to ${voteCountAfter}`);
});

Then('login required message shown', async function (this: CustomWorld) {
    await modelPage.voteButtonNotExists();
    await modelPage.validateVoteMessage();
});

Then('comment section should not be visible', async function (this: CustomWorld) {
    await modelPage.commentFieldNotExists();
    this.logger.info('Comment section not accessible for non-logged-in user');
});

Then('current vote count should be displayed', async function (this: CustomWorld) {
    expect(await modelPage.getVoteCount()).toBeGreaterThanOrEqual(0);
});

Then('Voting button is not visible to avoid duplicate vote', async function (this: CustomWorld) {
    await modelPage.voteButtonNotExists();
    this.logger.info('Checked duplicate vote prevention');
});

Then('comment {string} should be visible in comments section', async function (this: CustomWorld, comment: string) {
    const commentsCount = await modelPage.validateLatestComment(comment);
});
