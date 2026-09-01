import { test, expect } from '@playwright/test';
 
test('Homepage', async ({ page }) => {
 
   await page.goto('https://www.amazon.in')
 
   await page.getByPlaceholder('Search Amazon.in', {exact : true}).fill('Iphone16')
   await page.getByRole("button", {name : 'Go', exact : true}).click()
 
   await page.getByRole('link', { name: /iPhone 16 Plus/i }).first().click()
   //await page.getByRole("button",{name : 'Add to cart'}).click()
   await page.locator('(//input[@id="add-to-cart-button"])[2]').click()
   //await page.getByTitle('Add to Shopping Cart', {exact: true}).click()
 
   //await page.getByText('Add to cart').first().click()
 
 
 
})
 