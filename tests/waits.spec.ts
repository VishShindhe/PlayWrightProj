import { test, expect } from '@playwright/test';

test('wait demo', async ({ page }): Promise <void> => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  /*await page.waitForURL(/login/);
  await page.waitForTimeout(3000);
  await page.getByPlaceholder("username12").fill(dsds);
  await expect(page).toHaveTitle(/Playwright/);*/

  //const request = await page.waitForRequest(/ohrm_logo.png/);
  //console.log(request.url);
  const response = await page.waitForResponse(/ohrm_logo.png/);
  console.log(response.request().url());
  await expect(page.getByAltText("orangehrm-logo").last()).toBeVisible({timeout: 5});
  


});