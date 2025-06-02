import {Before, After} from '@cucumber/cucumber';
import BrowserBuilder from '../browser/browserBuilder'; // adjust path as needed

Before(async function () {
    this.browser = await new BrowserBuilder()
        .setHeadless(false)
        .setViewport(null)
        .addArgument([
            '--start-maximized',
            '--no-sandbox'
        ])
        .build();
});

After(async function () {
    if (this.browser) await this.browser.close();
});