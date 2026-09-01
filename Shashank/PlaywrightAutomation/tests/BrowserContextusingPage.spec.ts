import{test,expect,BrowserContext,Browser,Page} from '@playwright/test'

test('LearningBrowserContext', async({browser}) => {

    //initiate a browser context
   const context:BrowserContext = await browser.newContext(); //opening fresh browser context
   // const page:Page = await  context.newPage(); //opening new page in the browser context

    await page.goto('https://saucelabs.com/resources/demo-app')
    const clickSauceAI = page.locator("(//span[@class='MuiTypography-root MuiTypography-buttonLabel css-15zks1y'])[7]")
    //await clickSauceAI.click()

    // Wait for new page to open after click
    const[newPage1] = await Promise.all([page.context().waitForEvent('page'),clickSauceAI.click()])

    await newPage1.waitForLoadState();
    // Assert new page URL
    await expect(newPage1).toHaveURL('https://saucelabs.com/solutions/ai')

    // Work with elements on the new page
    const demoPage = newPage1.locator("(//a[.='Book a Demo'])[2]")
    await demoPage.click()
    await newPage1.locator("#Email").fill("Test")

    await newPage1.locator("(//span[.='Trust Center'])[1]").click()

    // const context1:BrowserContext = await browser.newContext(); //opening fresh browser context
    // const page1:Page = await context1.newPage(); //opening new page in the browser context

  


})