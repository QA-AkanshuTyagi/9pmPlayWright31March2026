import { test,expect } from '@playwright/test';

test('getByRole', async({page})=>{
  await page.goto('https://www.amazon.in');
  //await page.locator('//button[@type="submit"]').click();
  await page.getByPlaceholder("Search Amazon.in").fill("iphone");
  await page.getByRole('button', { name: 'Go' ,exact:true }).click();
  //await page.locator("//input[@id='nav-search-submit-button']");
  await page.waitForLoadState('networkidle');
  await page.locator('img[alt*="Apple iPhone Air"]').first().click();
})
