import {test, expect, BrowserContext} from '@playwright/test'

test ('Samsung Phone New Page', async ({page}) =>{

    //const context:BrowserContext= await browser.newContext()

    await page.goto('https://www.amazon.in/')
    await page.getByPlaceholder('Search Amazon.in', {exact : true}).fill('Samsung')
   await page.getByRole("button", {name : 'Go', exact : true}).click()

  const Samsung =  page.getByText('Galaxy Z Fold8 Ultra 5G Smartphone with Galaxy AI (Violet Shadow, 16GB RAM, 1TB Storage), Customised Processor, 5000mAh Battery, 200MP Camera, Now Nudge, Photo Assist')

  const [newPage] = await Promise.all([page.context().waitForEvent('page'), Samsung.click()])
  await newPage.waitForLoadState()

  await newPage.locator ("//input[@id='buy-now-button']").click()

  await page.getByText('Galaxy M07 Mobile (Black, 4GB RAM, 64GB Storage) | MediaTek Helio G99 | AnTuTu 624K | IP54| 50MP Camera | 7.6mm Slim | 5000mAh Battery | 25W Fast Charging | 6 Gen OS Upgrades | Without Charger').click()


})

test ('Samsung Phone New Page 2nd way', async ({browser}) =>{


    const context= await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.amazon.in/')
    await page.getByPlaceholder('Search Amazon.in', {exact : true}).fill('Samsung')
   await page.getByRole("button", {name : 'Go', exact : true}).click()

  const Samsung =  page.getByText('Galaxy Z Fold8 Ultra 5G Smartphone with Galaxy AI (Violet Shadow, 16GB RAM, 1TB Storage), Customised Processor, 5000mAh Battery, 200MP Camera, Now Nudge, Photo Assist')

  const [NP] = await Promise.all([context.waitForEvent('page'), Samsung.click()])
  await NP.waitForLoadState()

  await NP.locator ("//input[@id='buy-now-button']").click()

  await page.goto ('https://www.amazon.in/s?k=samsung&crid=H8TXE1QAFA5F&sprefix=samsung%2Caps%2C318&ref=nb_sb_noss_2')
  await page.waitForTimeout(3000)
  await page.getByText('Galaxy M07 Mobile (Black, 4GB RAM, 64GB Storage) | MediaTek Helio G99 | AnTuTu 624K | IP54| 50MP Camera | 7.6mm Slim | 5000mAh Battery | 25W Fast Charging | 6 Gen OS Upgrades | Without Charger').click()
  await page.waitForTimeout(2000)

  /*
  questions - 
  1. first page action is clearly visible in the browser UI?? how??
  2. UI closing automatically
  3. Should I always use [] while handling newpage??
  4. In the code below, why do we use browser and context in lowercase instead of 
     Browser and Context (camel case)?Also, what do newContext() and newPage() represent? 
     Why are these method names always written in this format? Why aren't they written \
     entirely in lowercase or in some other naming style? 
  -- const context= await browser.newContext()
  -- const page = await context.newPage()
  5. in popup handling why use dialog only in parameter?


  */
 
})