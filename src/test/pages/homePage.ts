import { Page, Locator } from "@playwright/test";
import BasePage from './basePage';

export class HomePage extends BasePage {
    readonly page:Page;
    private readonly settingsButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.settingsButton = page.locator('a[href="/settings"]');
    }

    async clickSettingsButton() {
        await this.waitForElementVisible(this.settingsButton);
        await this.clickElement(this.settingsButton);
    }
}