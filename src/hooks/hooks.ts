import { BeforeAll, AfterAll, Before, After, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { invokeBrowser, invokeDevices } from "../helper/browsers/browserManager";
import { createLogger } from "winston";
import { options } from "../helper/utils/logger";
const fs = require("fs-extra");
const path = require("path");

setDefaultTimeout(60 * 1000 * 6)

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    browser = await invokeBrowser();
});

Before(async function ({ pickle }) {
    const scenarioName = pickle.name + pickle.id
    context = await browser.newContext({
        ...invokeDevices(),
        recordVideo: {
            dir: "test-results/videos",
        },
    });
    await context.tracing.start({
        name: scenarioName,
        title: pickle.name,
        sources: true,
        screenshots: true, snapshots: true
    });
    this.page = await context.newPage();
    this.page.setDefaultTimeout(120000);
    this.logger = createLogger(options(scenarioName));
});


After(async function ({ pickle, result }) {
    const scenarioName = pickle.name.replace(/[^a-zA-Z0-9]/g, '_');
    const status = result?.status === Status.PASSED ? 'PASS' : 'FAIL';
    
    const tracePath = `./test-results/trace/${pickle.id}.zip`;
    if (result?.status == Status.PASSED) {
        const screenshotPath = `./test-results/screenshots/${scenarioName}_PASS.png`;
        await this.page.screenshot({ 
            path: screenshotPath,
            type: "png"
        })
    } else if (result?.status === Status.FAILED) {
        const screenshotPath = `./test-results/screenshots/${scenarioName}_FAIL.png`;
        await this.page.screenshot({
            path: screenshotPath,
            type: "png"
        });
    }
    
    await context.tracing.stop({ path: tracePath });

    if (this.page.video()) {
        const originalVideoPath = await this.page.video().path();
        await this.page.close(); // Close page to finalize video
        
        // Wait for video to be saved
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Rename video with scenario name and status
        if (fs.existsSync(originalVideoPath)) {
            const videoDir = path.dirname(originalVideoPath);
            const newVideoPath = path.join(videoDir, `${scenarioName}_${status}.webm`);
            fs.renameSync(originalVideoPath, newVideoPath);
            this.logger.info(`Video saved: ${newVideoPath}`);
        }
    } else {
        await this.page.close();
    }
    await context.close();
});

AfterAll(async function () {
    await browser.close();
})