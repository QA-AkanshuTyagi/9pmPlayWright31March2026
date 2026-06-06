import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
await page.getByText('Submit Form').click();

const numb=await page.getByText('link').count();
console.log(numb);
});