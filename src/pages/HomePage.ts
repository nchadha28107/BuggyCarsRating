import { CustomWorld } from "../customWorld";
import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";

class HomePage extends BasePage {

    private logoSelector = 'a[href="/"]';
    private registerLink = 'a[href="/register"]';
    private loginField = 'input[name="login"]';
    private passwordField = 'input[name="password"]';
    private loginButton = 'button[type="submit"].btn-success';
    private searchInput = 'input[name="q"]';
    private searchButton = 'button[type="submit"]';
    private popularMakeLinks = '.card img[src*="make"]';
    private overallRating = 'a[href="/overall"]';
    private logoutLink = 'a[href="/logout"]';
    private welcomeSelector = '.nav-link';
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

    async performQuickLogin(username: string, password: string) {
        await this.page.locator(this.loginField).fill(username);
        await this.page.locator(this.passwordField).fill(password);
        await this.page.locator(this.loginButton).click();
        this.logger.info(`Quick login performed for user: ${username}`);
    }

    async searchForCar(searchTerm: string) {
        
        await this.page.locator(this.searchInput).fill(searchTerm);
        await this.page.locator(this.searchButton).click();
        this.logger.info(`Searched for: ${searchTerm}`);
    }

    async clickPopularMake(index: number = 0) {
        const makes = await this.page.locator(this.popularMakeLinks).all();
        if (makes.length > index) {
            await makes[index].click();
            this.logger.info(`Clicked on popular make at index: ${index}`);
        } else {
            this.logger.error(`Popular make at index ${index} not found`);
        }
    }

    async getCarModelCount() {
        expect(await this.page.locator(this.carModelCards).count()).toBeGreaterThan(0);
    }

    async isUserLoggedIn(): Promise<boolean> {
        return (await this.page.locator(this.logoutLink).count() > 0);
    }

    async getWelcomeMessage(): Promise<string> {
        return await this.page.locator(this.welcomeSelector).textContent() || '';
    }

    async clickFirstCarModel() {
        await this.page.locator(this.carModelCards).first().click();
        this.logger.info("Clicked on first car model");
    }
}

export default HomePage;