import { expect, test} from '@playwright/test';

test('locators demo', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
    // Find the username field and enter value
   //await page.getByRole("textbox").first().fill("Admin");
   
    await page.getByPlaceholder(/username/i).fill("Admin");
    await page.getByRole("button",{name: /login/i});
    await expect(page.getByAltText(/company-branding/i)).toBeVisible();
    await expect(page).toHaveTitle(/OrangeHRM/i);
    await page.getByText(/Forgot your password/i).click();
    await page.close();
  });