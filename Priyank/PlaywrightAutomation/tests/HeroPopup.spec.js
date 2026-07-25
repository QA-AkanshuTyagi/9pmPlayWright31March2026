import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';

test('Handle Alert', async ({ page }) => {

//const context:BrowserContext= await browser.newContext();
//const page:Page=context.newPage();
//const page:Page=await context.newPage();

   await page.goto('https://the-internet.herokuapp.com')
   await page.getByText("JavaScript Alerts", {exact:true}).click()

   const alert = page.getByText("Click for JS Alert", {exact:true})

   page.on('Alertpopup', async({})=>{
     await Alertpopup.waitForTimeout(5000)
    await Alertpopup.accept()

   })

   await alert.click()

  // await page.waitForTimeout(5000)
 
})  