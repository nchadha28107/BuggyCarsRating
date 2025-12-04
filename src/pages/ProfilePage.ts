import { BasePage } from "./BasePage";
import { CustomWorld } from "../customWorld";
import { expect } from "@playwright/test";
import { TIMEOUTS } from '../helper/utils/utils';
import SharedState from '../helper/utils/sharedState';

const sharedState = SharedState.getInstance();

class ProfilePage extends BasePage {
    // Locators
    private profileInfo = 'my-profile';
    private firstNameField = 'input[id="firstName"]';
    private lastNameField = 'input[id="lastName"]';
    private currentPasswordField = 'input[id="currentPassword"]';
    private newPasswordField = 'input[id="newPassword"]';
    private confirmNewPasswordField = 'input[id="newPasswordConfirmation"]';
    private saveButton = 'button:has-text("Save")';
    private cancelButton = 'button:has-text("Cancel")';
    private successMessage = `${this.profileInfo} .row:nth-of-type(1) .result.alert-success`;
    private errorMessage = `${this.profileInfo} .row:nth-of-type(1) .result.alert-danger`;
    private firstNameFieldErrorMessage = `${this.firstNameField} + .alert.alert-danger`;
    private lastNameFieldErrorMessage = `${this.lastNameField} + .alert.alert-danger`;
    private profileTitle = 'h1, h2:has-text("Profile")';

    constructor(iWorld: CustomWorld) {
        super(iWorld.page, iWorld.logger);
    }

    async validateProfilePage() {
        await expect(this.page.locator(this.profileInfo)).toBeVisible({timeout: TIMEOUTS.EXPECT});
        this.logger.info("Profile page validated");
    }

    async getFirstName(): Promise<string> {
        return await this.page.locator(this.firstNameField).inputValue();
    }

    async getLastName(): Promise<string> {
        return await this.page.locator(this.lastNameField).inputValue();;
    }

    async updateFirstName(firstName: string) {
        await this.page.locator(this.firstNameField).clear();
        await this.page.locator(this.firstNameField).fill(firstName);
        this.logger.info(`Updated first name to: ${firstName}`);
    }

    async updateLastName(lastName: string) {
        await this.page.locator(this.lastNameField).clear();
        await this.page.locator(this.lastNameField).fill(lastName);
        this.logger.info(`Updated last name to: ${lastName}`);
    }

    async updateCurrentPassword(currentPassword: string) {
        if (currentPassword === 'valid') {
            currentPassword = sharedState.password; // or your valid password
        }
        await this.page.locator(this.currentPasswordField).fill(currentPassword);
    }

    async updateNewPassword(newPassword: string) {
        await this.page.locator(this.newPasswordField).fill(newPassword);
    }

    async updateConfirmNewPassword(confirmPassword: string) {
        await this.page.locator(this.confirmNewPasswordField).fill(confirmPassword);
    }

    async changePassword(currentPassword: string, newPassword: string, confirmPassword: string) {
        await this.updateCurrentPassword(currentPassword);
        await this.updateNewPassword(newPassword);
        await this.updateConfirmNewPassword(confirmPassword);
        this.logger.info("Password change form filled");
    }

    async clickSaveButton() {
        await this.page.locator(this.saveButton).click();
        await this.page.waitForLoadState('networkidle');
        this.logger.info("Clicked on Save button");
    }

    async verifySaveButtonDisabled() {
        await expect(this.page.locator(this.saveButton)).toBeDisabled();
        this.logger.info("Save button is Disabled");
    }

    async clickCancelButton() {
        await this.page.locator(this.cancelButton).click();
        this.logger.info("Clicked on Cancel button");
    }

    async verifySuccessMessageDisplayed() {
        await expect(this.page.locator(this.successMessage)).toBeVisible({timeout: TIMEOUTS.EXPECT});
        this.logger.info('Success message displayed');
    }

    async verifyErrorMessageDisplayed() {
        await expect(this.page.locator(this.errorMessage)).toBeVisible({timeout: TIMEOUTS.EXPECT});
        this.logger.info('Error message displayed');
        // return await this.isVisible(this.errorMessage);
    }

    async verifyFirstNameErrorMessageDisplayed() {
        await expect(this.page.locator(this.firstNameFieldErrorMessage)).toBeVisible({timeout: TIMEOUTS.EXPECT});
        this.logger.info('Error message displayed');
        // return await this.isVisible(this.errorMessage);
    }
    async verifyLastNameErrorMessageDisplayed() {
        await expect(this.page.locator(this.lastNameFieldErrorMessage)).toBeVisible({timeout: TIMEOUTS.EXPECT});
        this.logger.info('Error message displayed');
        // return await this.isVisible(this.errorMessage);
    }

    async updateProfile(firstName: string, lastName: string) {
        await this.updateFirstName(firstName);
        await this.updateLastName(lastName);
        await this.clickSaveButton();
        this.logger.info(`Profile updated: ${firstName} ${lastName}`);
    }
}

export default ProfilePage;