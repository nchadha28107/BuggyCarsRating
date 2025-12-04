import { CustomWorld } from "../customWorld";
import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";

class HomePage extends BasePage {

    private registerLink = 'a[href="/register"]';
    private loginField = 'input[name="login"]';
    private passwordField = 'input[name="password"]';
    private loginButton = 'button[type="submit"].btn-success';
    private overallRating = 'a[href="/overall"]';
    private carModelCards = '.card';

    constructor(iWorld: CustomWorld) {
        super(iWorld.page, iWorld.logger);
    }

    async navigateToHomePage() {
        await this.page.goto('https://buggy.justtestit.org/');
        this.logger.info("Navigated to Buggy Cars Rating homepage");
    }

    async clickRegisterLink() {
        await this.page.locator(this.registerLink).click();
        this.logger.info("Clicked on Register link");
    }

    async clickOverallRating() {
        await this.page.locator(this.overallRating).click();
        await this.page.waitForLoadState('networkidle');
        this.logger.info("Clicked on Overall Rating");
    }

    async getCarModelCount() {
        expect(await this.page.locator(this.carModelCards).count()).toBeGreaterThan(0);
    }
}

export default HomePage;