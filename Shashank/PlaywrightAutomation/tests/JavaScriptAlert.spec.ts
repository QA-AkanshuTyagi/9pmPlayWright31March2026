import{test,expect,BrowserContext,Browser,Page} from '@playwright/test'

test('JavaScriptAlert', async({browser}) => {

    const context:BrowserContext = await browser.newContext(); //opening fresh browser context
    const page:Page = await  context.newPage(); 

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.locator("//button[.='Click for JS Alert']").click()
    await page.waitForTimeout(10_000)
})