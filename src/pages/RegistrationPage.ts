import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { CustomWorld } from "../customWorld";
import { TIMEOUTS } from '../helper/utils/utils';
import SharedState from '../helper/utils/sharedState';

const sharedState = SharedState.getInstance();

class RegistrationPage extends BasePage {

    // Locators
    private usernameField = 'input[id="username"]';
    private firstNameField = 'input[id="firstName"]';
    private lastNameField = 'input[id="lastName"]';
    private passwordField = 'input[id="password"]';
    private confirmPasswordField = 'input[id="confirmPassword"]';
    private registerButton = 'button[type="submit"][class*="btn-default"]';
    private cancelButton = 'a.btn-default';
    private passwordErrorMessage = `${this.confirmPasswordField} ~ .alert-danger`;
    private successMessage = '.result.alert-success';
    private errorMessage = '.result.alert-danger';

    constructor(iWorld: CustomWorld) {
        super(iWorld.page, iWorld.logger);
    }

    // async validatePageUrl() {
    //     await expect(this.page).toHaveURL(/.*register/);
    //     this.logger.info("Registration page URL validated");
    // }

    async fillRegistrationForm(
        username: string,
        firstName: string,
        lastName: string,
        password: string,
        confirmPassword: string
    ) {
        await this.page.locator(this.usernameField).fill(username);
        await this.page.locator(this.firstNameField).fill(firstName);
        await this.page.locator(this.lastNameField).fill(lastName);
        await this.page.locator(this.passwordField).fill(password);
        await this.page.locator(this.confirmPasswordField).fill(confirmPassword);
        this.logger.info(`Registration form filled for user: ${username}`);
    }

    async clickRegisterButton() {
        await this.page.locator(this.registerButton).click();
        await this.page.waitForLoadState('networkidle');
        this.logger.info("Clicked on Register button");
    }

    async verifyUserExistsError(): Promise<void> {
        expect(await this.getErrorMessage()).toContain('UsernameExistsException');
        this.logger.info('User exists error verified');
    }

    // async getSuccessMessage(): Promise<string> {
    //     // await this.waitForElement(this.successMessage);
    //     return await this.page.locator(this.successMessage).textContent() || '';
    // }

    async getErrorMessage(): Promise<string> {
        return await this.page.locator(this.errorMessage).textContent() || '';
    }

    async isErrorMessageDisplayed() {
        await expect(this.page.locator(this.errorMessage)).toBeVisible({timeout: TIMEOUTS.EXPECT});
        this.logger.info('Validation error message displayed');
    }

    async isPasswordErrorMessageDisplayed() {
        await expect(this.page.locator(this.passwordErrorMessage)).toBeVisible({timeout: TIMEOUTS.EXPECT});
        this.logger.info('Password Validation error message displayed');
    }
    
    async isSuccessMessageDisplayed() {
        await expect(this.page.locator(this.successMessage)).toBeVisible({timeout: TIMEOUTS.EXPECT});
        this.logger.info('Registration Success message displayed');
    }

    // async clickCancelButton() {
    //     await this.page.locator(this.cancelButton).click();
    //     this.logger.info("Clicked on Cancel button");
    // }

    // async registerUser(
    //     username: string,
    //     firstName: string,
    //     lastName: string,
    //     password: string,
    //     confirmPassword: string
    // ) {
    //     await this.fillRegistrationForm(username, firstName, lastName, password, confirmPassword);
    //     await this.clickRegisterButton();
    //     this.logger.info(`User registration completed for: ${username}`);
    // }
}

export default RegistrationPage;