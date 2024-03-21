import { Page } from '@playwright/test'
export default class clickOnMegaMenuPage{

    constructor(public page: Page){    }

    async addFirstProductToCart() {
        await this.page.getByRole('link', { name: 'Apple', exact: true }).click();
        await this.page.locator('.product-action > button').first().click();
    }
    async isToastVisible() {
        const toast = this.page.locator("//a[.='View Cart ']");
        await toast.waitFor({state: "visible"})
        return toast;
    }

}