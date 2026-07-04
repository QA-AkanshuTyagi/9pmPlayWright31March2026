import { test, expect } from '@playwright/test';
 
test('testing', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  // await page.getByRole('button', { name: '✕' }).click();
  await page.locator('(//input[contains(@class,"nav-input nav-progressive-attribute")])[1]').fill('Nike Shoes');
  await page.locator('(//input[contains(@class,"nav-input nav-progressive-attribute")])[2]').click();
  await page.getByText("Nike Mens Promina Walking Shoes", {exact : true}).first().click();
 let altText=await page.getByAltText("Nike Mens Promina Walking Shoes").textContent();

 console.log(altText)
  const expectedValue = "₹4,995";
 const priceText = await page.locator('(//span[.="₹4,995"])[1]').textContent();
  // const priceText = await page.locator('(//span[contains(@class,"a-price-whole")])[1]').textContent();

 
  console.log('expectedValue:', expectedValue);
  console.log('actualValue:', priceText);
 
  await expect(priceText).toBe(expectedValue);
 
 
});
 
 