import { expect, test} from '@playwright/test';
import RegisterPage from '../pages/registerPage';
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import SpecialHotPage from '../pages/specialHotPage';
import MegaMenuPage from '../pages/megaMenuPage';

const email = "Vish06@mailinator.com";
const password = "Vish@123";

test.describe("Page Object Demo", async () => {

    test("Register test_01", async ({ page, baseURL }) => {

        const register = new RegisterPage(page);
    
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("Vish");
        await register.enterLastName("S");
        await register.enterEmail(email);
        await register.enterTelephone("1234567890");
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        await page.waitForTimeout(3000);
        await register.clickTermsAndCondition();
        await register.clickContinueToRegister();
    
    })
    
    test("Add to cart test_02", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        const homePage = new HomePage(page);
        const special = new SpecialHotPage(page);
        const mega = new MegaMenuPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.login(email, password);
        //await homePage.clickOnSpecialHotMenu();
        await homePage.clickOnMegaMenu();
        await mega.addFirstProductToCart();
        const isCartVisible = await mega.isToastVisible();
        expect(isCartVisible).toBeVisible();
    
    })
})


