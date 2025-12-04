import { BasePage } from "./BasePage";
import { CustomWorld } from "../customWorld";
import { expect } from "@playwright/test";
import { TIMEOUTS } from '../helper/utils/utils';

class ModelPage extends BasePage {

    private carModelName = 'my-model .container .row:nth-of-type(2) h3';
    private carImage = 'img.card-img-top, img.img-fluid';
    private voteMessage = '.card-text';
    private voteButton = '.btn-success';
    private voteCount = 'h4:has-text("Votes")';
    private commentField = '#comment';
    private latestComment = 'my-model .container .row:nth-of-type(3) table tbody tr:nth-of-type(1) td:nth-of-type(3)';

    constructor(iWorld: CustomWorld) {
        super(iWorld.page, iWorld.logger);
    }

    async clickVoteButton() {
        await this.page.locator(this.voteButton).click();
        this.logger.info("Clicked on Vote button");
    }

    async validateVoteMessage() {
        await expect(this.page.locator(this.voteMessage)).toBeVisible({timeout: TIMEOUTS.EXPECT});
    }
    async getVoteCount(): Promise<number> {
        const voteText = await this.page.locator(this.voteCount).textContent() || '';
        this.logger.info(`Current vote voteText: ${voteText}`);
        const voteNumber = parseInt(voteText.replace('Votes:', '').trim());
        this.logger.info(`Current vote count: ${voteNumber}`);
        return voteNumber;
    }

    async voteButtonNotExists() {
        await expect(this.page.locator(this.voteButton)).not.toBeAttached();
    }

    async postComment(comment: string) {
        await this.page.locator(this.commentField).fill(comment);
        await this.page.locator(this.voteButton).click();
        await this.page.waitForLoadState('networkidle');
        this.logger.info(`Posted comment: ${comment}`);
    }

    async commentFieldNotExists() {
        await expect(this.page.locator(this.commentField)).not.toBeAttached();
        this.logger.info("Comment Text Area is not shown");
    }

    async validateLatestComment(comment:string) {
        expect(await this.page.locator(this.latestComment).textContent()).toBe(comment);
    }

    async validateModelPage() {
        await expect(this.page.locator(this.carModelName)).toBeVisible({timeout: TIMEOUTS.EXPECT});
        this.logger.info("Car model page validated");
    }
}

export default ModelPage;