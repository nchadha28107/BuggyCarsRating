import { BasePage } from "./BasePage";
import { CustomWorld } from "../customWorld";
import { expect } from "@playwright/test";
import { TIMEOUTS } from '../helper/utils/utils';

class LoginPage extends BasePage {

    // Locators
    private loginField = 'input[name="login"]';
    private passwordField = 'input[name="password"]';
    private loginButton = 'button[type="submit"].btn-success';
    private errorMessage = '.label-warning';
    private logoutLink = 'a.nav-link:has-text("Logout")';
    private profileLink = 'a[href="/profile"]';

    constructor(iWorld: CustomWorld) {
        super(iWorld.page, iWorld.logger);
    }

    async validateURL() {
        expect(this.page.url()).toBe('https://buggy.justtestit.org/');
        this.logger.info(`Current URL: ${this.page.url()}`);
    }

    async performLogin(username: string, password: string) {
        await this.page.locator(this.loginField).fill(username);
        await this.page.locator(this.passwordField).fill(password);
        await this.page.locator(this.loginButton).click();
        await this.page.waitForLoadState('networkidle');
        this.logger.info(`Login performed for user: ${username}`);
    }

    async isLoginSuccessful() {
        await expect(this.page.locator(this.logoutLink)).toBeVisible({timeout: TIMEOUTS.EXPECT});
    }

    async validateUsernameMessage() {
        expect(await this.page.locator(this.loginField).evaluate((el: HTMLInputElement) => !el.validity.valid)).toBeTruthy();
        expect(await this.page.locator(this.loginField).evaluate((el: HTMLInputElement) => el.validationMessage)).toContain('Please fill out this field');
    }

    async errorMessageDisplayed() {
        await expect(this.page.locator(this.errorMessage)).toBeVisible({timeout: TIMEOUTS.EXPECT});
    }

    async logout() {
        if (await this.page.locator(this.logoutLink).count()>0) {
            await this.page.locator(this.logoutLink).click();
            this.logger.info("User logged out successfully");
        }
    }

    async isUserLoggedIn(): Promise<boolean> {
        return await this.page.locator(this.logoutLink).count() > 0;
    }

    async navigateToProfile() {
        await this.page.locator(this.profileLink).click();
        await this.page.waitForLoadState('networkidle');
        this.logger.info("Navigated to profile page");
    }
}

export default LoginPage;