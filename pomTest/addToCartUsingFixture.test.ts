import { test, expect} from "../base/pomFixture";
import * as data from "../test-data/addToCart-test-data.json";

test.describe("Page Object Demo", async () => {

    test("Register test_01", async ({ page, baseURL, registerPage }) => {
        await page.goto(`${baseURL}route=account/register`);
        await registerPage.enterFirstName(data.firstname);
        await registerPage.enterLastName(data.lastname);
        await registerPage.enterEmail(data.email);
        await registerPage.enterTelephone(data.phone_number);
        await registerPage.enterPassword(data.password);
        await registerPage.enterConfirmPassword(data.password);
        await page.waitForTimeout(3000);
        await registerPage.clickTermsAndCondition();
        await registerPage.clickContinueToRegister();
    
    })
    
    test("Add to cart test_02", async ({ page, baseURL, loginPage, homePage, megaPage }) => {
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.login(data.email, data.password);
        await homePage.clickOnMegaMenu();
        await megaPage.addFirstProductToCart();
        const isCartVisible = await megaPage.isToastVisible();
        expect(isCartVisible).toBeVisible();
    
    })
})


