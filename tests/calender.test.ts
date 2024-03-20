import { test } from '@playwright/test';
import moment from "moment";

// test("Calendar demo using fill function", async ({ page }) => {

//     await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
//     let date = "1999-09-04";

//     await page.fill("id=birthday", date);
//     await page.waitForTimeout(3000);
// })

// /html/body/div[9]/div[1]/table/thead/tr[2]/th[1]

test("Calendar demo using moment function", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    //await page.getByPlaceholder("Start date").click();
    await page.click("//input[@placeholder='Start date']");

    const mmYY = page.locator("(//table[@classs='table-condensed']//th[@class='datepicker-switch'])[1]");
    const prev = page.locator("/html/body/div[9]/div[1]/table/thead/tr[2]/th[1]");
    //const prev = page.locator("(//table[@classs='table-condensed']//th[@class='prev'])[1]");
    const next = page.locator("(//table[@classs='table-condensed']//th[@class='next'])[1]");
    
    // await prev.click();
    // await page.click("//td[@class='day'][text()='4']");
    // await page.waitForTimeout(3000);

    let dateToSelect: string = "December 2024";

    const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
    console.log("This month? " + thisMonth);

    while ( await mmYY.textContent() != dateToSelect) {
        if(thisMonth){
            await prev.click();
        } else {
            await next.click();
        }
    }


})