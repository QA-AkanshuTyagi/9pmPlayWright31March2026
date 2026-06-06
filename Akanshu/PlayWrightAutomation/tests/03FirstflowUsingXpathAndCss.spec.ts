import { test, expect } from '@playwright/test';

test.describe('Regression Cases', () => {

test('SearchingProductOnAmazon',async({page})=>{

 await page.goto("https://www.amazon.in/")  // to open the url
//const searchbar=await page.locator('input#twotabsearchtextbox');

const searchbar=await page.locator("//input[@id='twotabsearchtextbox']");

await searchbar.fill('iphone');

const searchIcon=await page.locator("//input[@id='nav-search-submit-button']");

await searchIcon.click();
const textResult=await page.locator("//h2[.='Results']");
const textResult1=await textResult.textContent();
await expect(textResult1).toBe('Results');
await expect(page).toHaveTitle('Amazon.in : iphone');
}
)
});


