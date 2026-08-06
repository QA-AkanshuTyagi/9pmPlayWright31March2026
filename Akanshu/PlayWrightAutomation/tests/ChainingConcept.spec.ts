import { test, expect } from '@playwright/test';


test('TableHandling', async ({ page }) => {
  
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
let tablevalues=await page.getByRole('table').filter({hasText: 'Learn Selenium'}).getByRole('row').filter({hasText: 'Learn Selenium'}).getByRole('cell').nth(3).textContent();

console.log(tablevalues);


});

test('TableHandling1', async ({  page }) => {
 
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
 
let tablevalues=await page.getByRole('table').filter({hasText: 'Learn Selenium'}).getByRole('row').filter({hasText:'Learn Selenium'}).getByRole("cell").nth(3).textContent();
 
console.log(tablevalues);
 
});