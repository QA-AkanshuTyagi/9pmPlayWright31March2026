import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';

test('Homepage', async ({ browser  }) => {

    const context:BrowserContext= await browser.newContext();
//const page:Page=context.newPage();
const page:Page=await context.newPage();

   await page.goto('https://www.amazon.in')
   
   await page.getByPlaceholder('Search Amazon.in', {exact : true}).fill('Iphone16')
   await page.getByRole("button", {name : 'Go', exact : true}).click()

   const Phonepriceinhomepage = await page.locator("(//span[@class='a-price-whole'])[1]").textContent()
   console.log(Phonepriceinhomepage)

 const PhoneClick = page.locator("(//span[.='iPhone 16e 128 GB: Built for Apple Intelligence, A18 Chip, Supersized Battery Life, 48MP Fusion. Camera, 15.40 cm (6.1″) Super Retina XDR Display; Black'])[1]")

const [newpage] = await Promise.all([context.waitForEvent('page'), PhoneClick.click()])
await newpage.waitForLoadState()

 const Phonepriceinnextpage = await newpage.locator("(//span[@class='a-price-whole'])[5]").textContent()
console.log(Phonepriceinnextpage)

   if (Phonepriceinhomepage==Phonepriceinnextpage){
    console.log('Price is Matching for Iphone16')
   }else 
    console.log('Price is not Matching')

    
 //Opening differnt page --- 
   //await page.getByRole("button",{name : 'Add to cart'}).click()
   //await page.locator('(//input[@id="add-to-cart-button"])[2]').click()
   //await page.getByTitle('Add to Shopping Cart', {exact: true}).click()
   //await page.getByText('Add to cart').first().click()
//*/

 
})