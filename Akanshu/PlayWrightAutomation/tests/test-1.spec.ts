import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.locator('[id="twotabsearchtextbox"]').fill('iPhone 16');
 await page.locator('[id="nav-search-submit-button"]').click();
//await page.getByAltText('Sponsored Ad - Apple iPhone 16 Plus 256 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life....').click();

const countValue:number= await page.locator("//span[contains(text(),'iPhone 16')]").count();
console.log("hello")
console.log(countValue);
});