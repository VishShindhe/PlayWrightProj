import {Page, expect, test} from '@playwright/test'

// test("Interaction with tabs", async ({ page }) => {

//     await page.goto("https://lambdatest.com/selenium-playground/window-popup-modal-demo");

//     const [newWindow] = await Promise.all([
//         page.waitForEvent("popup"),
//         page.click("'  Follow On Twitter '")
//     ]);

//     console.log(newWindow.url());

//     // Using newWindow handler we can perfom various actions like
//         // newWindow.fill("<somelocator>","<value to be entered>");


// });

test("Multiple windows", async ({ page }) => {
    
    await page.goto("https://lambdatest.com/selenium-playground/window-popup-modal-demo");
    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ])
    await multiPage.waitForLoadState();
    const pages = multiPage.context().pages();
    console.log('No. of tabs: ' + pages.length);

    pages.forEach(tab => {
        console.log(tab.url());
    });

    let facebookPage: Page;
    for (let index = 0; index < pages.length; index++){
        const url = pages[index].url();
        if (url == "https://www.facebook.com/lambdatest/") {
            facebookPage = pages[index];
        }
    }

    const text = await facebookPage.textContent("//h1");
    console.log(text);
})