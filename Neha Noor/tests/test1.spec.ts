import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
  await page.getByRole('link', { name: 'link' }).click();
 const numb = await page.getByText('link').count();
 console.log(numb);
});