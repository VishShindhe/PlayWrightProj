import { Page } from '@playwright/test'
export default class LoginPage{

    constructor(public page: Page){    }

    async enterEmail(email: string) {
        await this.page
                .getByPlaceholder('E-Mail Address')
                .fill(email);
    }

    async enterPassword(password: string) {
        await this.page
                .getByPlaceholder('Password')
                .fill(password);
    }

    async clickLogin(){
        await this.page
                .locator("input[value='Login']")
                .click();
    }
}