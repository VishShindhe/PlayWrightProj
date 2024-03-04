import { expect, test} from '@playwright/test';

test('ui demo', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder(/username/i).fill("Admin");
    await page.getByPlaceholder(/password/i).fill("admin123");
    await page.getByRole("button",{name: /login/i}).click();
    await page.getByRole("button",{name: "check"}).click();
    
  });