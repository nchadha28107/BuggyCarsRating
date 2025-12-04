import { Given, When, Then, Before, DataTable } from '@cucumber/cucumber';
import RegistrationPage from '../pages/RegistrationPage';
import SharedState from '../helper/utils/sharedState';
import { CustomWorld } from '../customWorld';
import {
    generateRandomUsername,
    generateRandomFirstName,
    generateRandomLastName,
    generateRandomPassword,
    generateInvalidName
} from '../helper/utils/utils';

let registrationPage: RegistrationPage;
const sharedState = SharedState.getInstance();

Before(async function (this: CustomWorld) {
    registrationPage = new RegistrationPage(this);
});

When('user fills registration form with data', async function (this: CustomWorld, dataTable: DataTable) {
    let data: Record<string, string> = {};

    // Check if dataTable is provided and has rows
    if (dataTable && dataTable.rowsHash && typeof dataTable.rowsHash === 'function') {
        data = dataTable.rowsHash();
    }

    const username = data.username === 'random' || !data.username ? generateRandomUsername() : data.username;
    const firstName = data.firstName || generateRandomFirstName();
    const lastName = data.lastName || generateRandomLastName();
    const password = data.password || generateRandomPassword();

    this.logger.info(username);
    
    sharedState.setUserData(username, firstName, lastName, password);
    await registrationPage.fillRegistrationForm(username, firstName, lastName, password, password);
    this.logger.info(`Filled registration form with username: ${username} and password : ${password}`);
});

When('user fills registration form with mismatched passwords', async function (this: CustomWorld, dataTable: DataTable) {
    const data = dataTable.rowsHash();
    const username = data.username === 'random' ? generateRandomUsername() : data.username;
    const firstName = data.firstName || generateRandomFirstName();
    const lastName = data.lastName || generateRandomLastName();
    const password = data.password || generateRandomPassword();
    const confirmPassword = data.confirm || 'DifferentPassword123';
    await registrationPage.fillRegistrationForm(username, firstName, lastName, password, confirmPassword);
    this.logger.info('Filled registration form with mismatched passwords');
});

When('user fills registration form with empty username', async function (this: CustomWorld) {
    const password = generateRandomPassword();
    await registrationPage.fillRegistrationForm('', generateRandomFirstName(), generateRandomLastName(), password, password);
    this.logger.info('Filled registration form with empty username');
});

Then('user should see username already exists error', async function (this: CustomWorld) {
    await registrationPage.verifyUserExistsError();
});

When('user clicks Register button', async function (this: CustomWorld) {
    await registrationPage.clickRegisterButton();
});

When('user completes registration flow', async function (this: CustomWorld) {
    const username = generateRandomUsername();
    const firstName = generateRandomFirstName();
    const lastName = generateRandomLastName();
    const password = generateRandomPassword();

    sharedState.setUserData(username, firstName, lastName, password);

    await registrationPage.fillRegistrationForm(username, firstName, lastName, password, password);
    await registrationPage.clickRegisterButton();
    await registrationPage.isSuccessMessageDisplayed();
    this.logger.info('Completed registration flow');
});

Then('user should see registration success message', async function (this: CustomWorld) {
    await registrationPage.isSuccessMessageDisplayed();
});

Then('user should see password mismatch error', async function (this: CustomWorld) {
    await registrationPage.isPasswordErrorMessageDisplayed();
});

Then('user should see validation error message', async function (this: CustomWorld) {
    await registrationPage.isErrorMessageDisplayed();
});