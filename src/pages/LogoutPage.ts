import { BasePage } from "./BasePage";
import { CustomWorld } from "../customWorld";

class LogoutPage extends BasePage {

    private logoutMessage = '//*[text()="Du bist ausgeloggt. Bis bald!"]';
    private loginBackButton = '//*[text()="Wieder einloggen"]';

    constructor(iWorld: CustomWorld) {
        super(iWorld.page, iWorld.logger);
    }

    async validatePage() {
        await this.page.locator(this.logoutMessage).isVisible();
        this.logger.info("Logout page validated");
    }

    async selectLoginBackButton() {
        await this.page.locator(this.loginBackButton).first().click();
        await this.page.waitForLoadState();
        this.logger.info("Login Back Button clicked");
    }
}

export default LogoutPage;