import { test, expect } from '@playwright/test';

test('chain locator', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

  const checkbox = await page.getByRole ('table').filter({hasText : 'Smartphone'}).getByRole('row').filter({hasText : 'Laptop'}).getByRole('checkbox');    
 await checkbox.check();
  await expect(checkbox).toBeChecked();
 
});