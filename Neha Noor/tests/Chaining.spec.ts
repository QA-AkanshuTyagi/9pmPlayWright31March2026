import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
  await page.getByRole('table').filter({hasText:'Smartphone'}).getByRole('row').getByRole('cell').nth(3).click();
});

