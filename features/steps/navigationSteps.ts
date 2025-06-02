import {Given, Then} from "@cucumber/cucumber";

Given("I navigate to website - {string}", async function (website: string) {
    this.page = await this.browser.pages().then(e => e[0]);
    await this.page.goto(website, {waitUntil: "networkidle2"});
});

Given("I click the - {string} - button", async function (page: string) {
    await this.page.waitForSelector(`xpath///a[span[contains(text(), '${page}')]]`, {visible: true})
        .then(button => button.click());
});

Then("The - {string} - page is displayed", async function (heading: string) {
    await this.page.waitForSelector(`xpath///h1[contains (text(), '${heading}')]`, {visible: true});
});