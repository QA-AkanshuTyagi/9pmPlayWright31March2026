import { test, expect } from '@playwright/test';
 
test('Homepage', async ({ page }) => {
 
   await page.goto('https://www.amazon.in')
 
   await page.getByPlaceholder('Search Amazon.in', {exact : true}).fill('Iphone16')
   await page.getByRole("button", {name : 'Go', exact : true}).click()
 
   await page.getByText('iPhone 16 Plus 256 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; White').click()
   //await page.getByRole("button",{name : 'Add to cart'}).click()
const [newPage]= await Promise.all([page.context().waitForEvent('page'),page.locator('(//span[@id="submit.add-to-cart-announce"])[2] ').click()])

   await newPage.waitForLoadState();
   
   //await page.getByTitle('Add to Shopping Cart', {exact: true}).click()
 
   //await page.getByText('Add to cart').first().click()
 
 
 
})