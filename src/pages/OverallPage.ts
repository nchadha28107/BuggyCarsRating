import { BasePage } from "./BasePage";
import { CustomWorld } from "../customWorld";
import { expect } from "@playwright/test";
import { TIMEOUTS } from '../helper/utils/utils';

class OverallPage extends BasePage {

    // Locators
    private overallTable = '.cars.table';
    private overallTableRows = '.cars.table tbody tr';

    constructor(iWorld: CustomWorld) {
        super(iWorld.page, iWorld.logger);
    }

    async selectCar(carName: string) {
        await expect(this.page.locator(this.overallTable)).toBeVisible({timeout: TIMEOUTS.EXPECT});
        await this.page.locator(this.overallTableRows).locator('a', { hasText: `${carName}` }).click();
        await this.page.waitForLoadState('networkidle');
        this.logger.info(`Clicked on ${carName} Model`);
    }
}

export default OverallPage;