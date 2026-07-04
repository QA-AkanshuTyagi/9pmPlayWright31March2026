import { test, expect } from '@playwright/test';

test('Homepage', async ({ page }) => {

   await page.goto('https://www.amazon.in')

   await page.getByPlaceholder('Search Amazon.in', {exact : true}).fill('Iphone16')
   await page.getByRole("button", {name : 'Go', exact : true}).click()
   
   /*
   await page.locator('(//button[@class="a-button-text"])[5]').click()

 
   await page.getByText("See options").click()
   await page.locator('(//span[@id = "color_name_1-announce"])[1]').click()


   const phoneprice = await page.locator('(//span[@class="a-price-whole"])[5]').textContent()
   console.log('Phone price in home page is ' + phoneprice)

   await page.locator('(//input[@id="add-to-cart-button"])[2]').click()
   await page.locator('(//span[contains(text(),"Cart")])[2]').click()

   const phonepriceincart = await page.locator('(//span[@class="a-size-medium a-color-base sc-price sc-white-space-nowrap"])[2]').textContent()
   console.log('Final Price in cart is ' + phonepriceincart)

   if (phoneprice==phonepriceincart){
    console.log('Price is Matching for Iphone16')
   }else 
    console.log('Price is not Matching')
*/

await page.getByText("iPhone 16 Plus 256 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Black").click()
await page.locator('(//input[@id="add-to-cart-button"])[2]').click()


  /* 
 Opening differnt page --- 
   //await page.getByRole("button",{name : 'Add to cart'}).click()
   //await page.locator('(//input[@id="add-to-cart-button"])[2]').click()
   //await page.getByTitle('Add to Shopping Cart', {exact: true}).click()
   //await page.getByText('Add to cart').first().click()
*/

 
})