import{test,expect,BrowserContext,Browser,Page} from '@playwright/test'
 
test('JavaScriptAlert', async({browser}) => {

  const context:BrowserContext= await browser.newContext()
  const page:Page=await context.newPage()

  await page.goto("https://grotechminds.com/alert/")
  const alert=page.locator("//button[.='Alert1']").first();

  page.on('dialog',async(d)=>{
  console.log(d.type(),d.message())
  expect(d.type()).toContain("alert")
  await d.accept;


  })
  await alert.click();
  await page.waitForTimeout(10_000)

})


 
    
 