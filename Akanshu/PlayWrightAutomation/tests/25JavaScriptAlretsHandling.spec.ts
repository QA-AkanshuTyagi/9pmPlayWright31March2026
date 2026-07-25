import{test,expect,BrowserContext,Browser,Page} from '@playwright/test'
 
test('JavaScriptAlert', async({browser}) => {
 
    const context:BrowserContext = await browser.newContext(); //opening fresh browser context
    const page:Page = await  context.newPage();
 
    await page.goto("https://grotechminds.com/alert/")
    const alert= page.locator("//button[.='Alert1']").first();

page.on('dialog', async (d)=>{
console.log(d.type(), d.message())
expect(d.type()).toContain("alert")
await d.accept();


})




    await alert.click();


    await page.waitForTimeout(5000)

   // const confirm=  page.locator("//button[.='Click for JS Confirm']")
    // await confirm.click();
    // await page.waitForTimeout(5000)
})
 test('JavaScriptPrompt', async({browser}) => {
 
    const context:BrowserContext = await browser.newContext(); //opening fresh browser context
    const page:Page = await  context.newPage();
 
 await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
      //  await page.goto("https://grotechminds.com/alert/")

  const alert= page.locator("//button[.='Click for JS Prompt']").first();
//const alert= page.locator("//button[.='Received1']").first()
page.on('dialog', async (d)=>{
console.log(d.type(), d.message())
expect(d.type()).toContain("prompt")
await page.waitForTimeout(4000);
await d.accept("Akanshu");
//await d.dismiss();
await page.waitForTimeout(4000);    

})




    await alert.click();


    await page.waitForTimeout(5000)

   // const confirm=  page.locator("//button[.='Click for JS Confirm']")
    // await confirm.click();
    // await page.waitForTimeout(5000)
})
 test('JavaScriptconfirm', async({browser}) => {
 
    const context:BrowserContext = await browser.newContext(); //opening fresh browser context
    const page:Page = await  context.newPage();
 
  //  await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
        await page.goto("https://grotechminds.com/alert/")

    // const alert= page.locator("//button[.='Click for JS Confirm']").first();
const alert= page.locator("//button[.='Received1']").first()
page.on('dialog', async (d)=>{
console.log(d.type(), d.message())
expect(d.type()).toContain("confirm")
await page.waitForTimeout(4000);
//await d.accept();
await d.dismiss();

})




    await alert.click();


    await page.waitForTimeout(5000)

   // const confirm=  page.locator("//button[.='Click for JS Confirm']")
    // await confirm.click();
    // await page.waitForTimeout(5000)
})