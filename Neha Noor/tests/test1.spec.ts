import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
  await page.getByRole('link', { name: 'link' }).click();
 const numb = await page.getByText('link').count();
 console.log(numb);
});


const data =
const checkbox = await page.getByRole ('table').filter({hasText : 'Smartphone'}).getByRole('row').filter({hasText : 'Laptop'}).getByRole('checkbox').click()
 
await expect (checkbox).toBeChecked()