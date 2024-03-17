import {test, expect} from '@playwright/test'

test('Basic Interactions', async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInputBox = page.getByPlaceholder("Please enter your Message");
    await messageInputBox.fill("Hello Guys!");
    console.log(await messageInputBox.inputValue());
    await page.getByRole("button",{name:"Get Checked Value"}).click();
    await page.waitForTimeout(5000);
    await expect(page.locator("#message")).toHaveText("Hello Guys!");
    //expect(messageInputBox).toHaveAttribute

});

test('Sum', async ({ page }) => {


    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    let num1:number = "125";
    num1 = 125;

    let num2 = 549;
  //  num2 = "Hello";
    let sum = num1 + num2;

    const input1 = page.locator("#sum1");
    const input2 = page.locator("#sum2");

    await input1.fill("" +num1);
    await input2.fill("" +num2);
    await page.getByRole("button", {name:"Get Sum"}).click();

    await expect(page.locator("#addmessage")).toHaveText("" +sum);

})


test('Checkbox', async ({ page}) => {
    page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singleCheckbox = page.locator("#isAgeSelected");
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();
})