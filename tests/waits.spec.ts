import { test, expect } from '@playwright/test';

test('wait demo', async ({ page }): Promise <void> => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.waitForURL(/login/);
  await page.waitForTimeout(3000);
  await parseArgs.getByPlaceholder("username12").fill(dsds);
  await expect(page).toHaveTitle(/Playwright/);
});