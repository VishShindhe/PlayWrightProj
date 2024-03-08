import {chromium,test} from "@playwright/test"

test("Login demo", async () => {

    const browser = await chromium.launch({
        headless: false
    });
    

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle= 'dropdown']//span[contains(.,'My account')]")
    //await page.click("text=Login");
    await page.click("'Login'"); 

    await page.getByPlaceholder("E-Mail Address").fill("test.qa@test.com");
    await page.getByPlaceholder("Password").fill("test123");
    await page.getByRole("button",{name: "Login"}).click();
    await page.waitForTimeout(5000);

    //New Page ie nothing but a new tab cookies and session are all transferred to this page
    const page2 = await context.newPage();
    await page2.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
    await page2.waitForTimeout(5000);

    //New Context ie nothing but a new window cookies are not transferred to this window. Hence this will fail
    const context2 = await browser.newContext();
    const page3 = await context2.newPage();
    await page3.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
    await page3.waitForTimeout(5000);

})