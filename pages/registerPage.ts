import { Page } from '@playwright/test'
export default class RegisterPage{

    constructor(public page: Page){    }

    async enterFirstName(firstName: string) {
        await this.page
                .getByPlaceholder('First Name')
                .fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.page
                .getByPlaceholder('Last Name')
                .fill(lastName);
    }

    async enterEmail(email: string) {
        await this.page
                .getByPlaceholder('E-Mail')
                .fill(email);
    }

    async enterTelephone(phone: string) {
        await this.page
                .getByPlaceholder('Telephone')
                .fill(phone);
    }

    async enterPassword(password: string) {
        await this.page
                .locator("input[name='pasword']")
                .fill(password);
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.page
                .locator("input[name='confirm']")
                .fill(confirmPassword);
    }

    async isSubscribed(){
        return await this.page
                    .locator("#id=input-newsletter-no").isChecked();
    }

    async clickTermsAndCondition() {
        this.page.click("input[name= 'agree']")
    }

    async clickContinueToRegister() {
        await Promise.all ([
            this.page.waitForLoadState('domcontentloaded'),
            this.page.locator("input[value='Continue']")
        ])
        
    }

}