import { test, expect } from '@playwright/test';

test('testing', async ({ page }) => {
await page.goto ('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
//const data = 
const checkbox = page.getByRole ('table').filter({hasText : 'Smartphone'}).getByRole('row').filter({hasText : 'Laptop'}).getByRole('checkbox');

await checkbox.check();
await expect (checkbox).toBeChecked();

//console.log(data)
//through xpath
//await page.locator ('//input[@type="checkbox"]').nth(2).check()

})