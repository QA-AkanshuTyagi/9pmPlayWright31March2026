import { test, expect } from '@playwright/test';

test('Locators- getByText', async ({ page }) => {

await page.goto('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce')
await page.getByRole('button',{name:'Login'}).click();

await page.getByAltText('Sauce Labs Backpack').click();
//const text=await page.getByText('Products')
//const actualText=await text.textContent();
/*console.log(actualText);

const expectedText='Products';  
expect(actualText).toBe(expectedText);  

});*/



});