import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';
 
test('Homepage', async ({ browser,page  }) => {
 
const context:BrowserContext= await browser.newContext();
//const page:Page=context.newPage();
//const page:Page=await context.newPage();

   await page.goto('https://www.amazon.in')
   
   await page.getByPlaceholder('Search Amazon.in', {exact : true}).fill('Iphone16')
   await page.getByRole("button", {name : 'Go', exact : true}).click()
 
   const Phonepriceinhomepage = await page.locator("(//span[@class='a-price-whole'])[1]").textContent()
   console.log(Phonepriceinhomepage)
 
 const allPhones= page.locator("//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal']/span")
 const totalElements=await allPhones.count();
for(let i=0;i<totalElements;i++){
const textOfEachPhone= await allPhones.nth(i).textContent();

if(textOfEachPhone?.includes('iphone 16')){
 let [newpage] = await Promise.all([page.context().waitForEvent('page'),
   
   allPhones.nth(i).click()])

   await newpage.waitForLoadState()
  break;
   
   
}


}





 
 const Phonepriceinnextpage = await newpage.locator("(//span[@class='a-price-whole'])[5]").textContent()
console.log(Phonepriceinnextpage)
 
   if (Phonepriceinhomepage==Phonepriceinnextpage){
    console.log('Price is Matching for Iphone16')
   }else
    console.log('Price is not Matching')
})