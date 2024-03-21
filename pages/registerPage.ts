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

    // async isSubscribed(){
    //     return await this.page
    //                 .locator("#id=input-newsletter-no").isChecked();
    // }

    async clickTermsAndCondition() {
        // await Promise.all ([
        //     this.page.waitForLoadState('domcontentloaded'),
        //     this.page.locator("#input-agree").click()
        // ])
        //await this.page.check("//lable[@for='input-agree']")
        //await this.page.getByRole('checkbox', { name: 'agree' }).click();
        await this.page.getByText('I have read and agree to the').click();
        
       
    }

    async clickContinueToRegister() {
        // await Promise.all ([
        //     this.page.waitForLoadState('domcontentloaded'),
        //     this.page.locator("input[value='Continue']")
        // ])

        await this.page.getByRole('button', { name: 'Continue' }).click()
        
    }

}

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
//   await page.getByText('I have read and agree to the').click();
//   ;
// });