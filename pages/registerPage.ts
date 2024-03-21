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
                .type(phone);
    }

    async enterPassword(password: string) {
        await this.page.getByPlaceholder('Password').first().fill(password);
    }

   async enterConfirmPassword(confirmPassword: string) {
        await this.page.getByPlaceholder('Password Confirm').fill(confirmPassword);
    }

    async isSubscribed(){
        return await this.page
                    .locator("#id=input-newsletter-no").isChecked();
    }

    async clickTermsAndCondition() {
        await this.page.getByText('I have read and agree to the').click(); 
    }

    async clickContinueToRegister() {
        await this.page.getByRole('button', { name: 'Continue' }).click()
        
    }

}
