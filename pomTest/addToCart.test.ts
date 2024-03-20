import { expect, test} from '@playwright/test';
import RegisterPage from '../pages/registerPage';
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import SpecialHotPage from '../pages/specialHotPage';

const email = "Vish01@mailinator.com";
const password = "Vish@123";
test("Register test_01", async ({ page, baseURL }) => {

    const register = new RegisterPage(page);

    await page.goto(`${baseURL}route=account/register`);
    // await register.enterFirstName("Vish");
    // await register.enterLastName("S");
    // await register.enterEmail(email);
    // await register.enterTelephone("1234567890");
     await register.enterPassword(password);
    await register.enterConfirmPassword(password);
    //expect(register.isSubscribed()).toBeChecked();
    await register.clickTermsAndCondition();
    await register.clickContinueToRegister();

})