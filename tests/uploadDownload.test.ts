import { test } from '@playwright/test';

test("Download files", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox", "sadasfsdfsdgf");
    await page.getByRole("button",{name: /Generate File/i}).click();
    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("#link-to-download")
    ])
    const fileName = download[0].suggestedFilename();
    await download[0].saveAs(fileName);
    // const path = await download[0].path();
    // console.log(path);

})

test.only("Upload files", async ({ page }) => {

    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    //await page.setInputFiles("input[type='file']",
    //["uploadItems/apple.png","uploadedItems/mango.png"]);

    //Using filechooser
    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])
    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles(["uploadItems/apple.png","uploadedItems/mango.png"])
})