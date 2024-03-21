import { Page } from '@playwright/test'
export default class HomePage{

    constructor(public page: Page){    }

    async clickOnSpecialHotMenu() {
        this.page.click("(//span[contains(text(), ' Special ')]/../..)[2]");
    }

    async clickOnMegaMenu() {
        this.page.getByRole('button', { name: 'Mega Menu' }).click();
        this.page.locator('ol').click();
    }
}

   