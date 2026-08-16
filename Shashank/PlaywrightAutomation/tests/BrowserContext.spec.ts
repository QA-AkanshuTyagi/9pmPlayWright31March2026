import{test,expect,BrowserContext,Browser,Page} from '@playwright/test'

test('LearningBrowserContext', async({browser}) => {

    //initiate a browser context --it is used to fresh session means without store cookies & cache
    const context:BrowserContext = await browser.newContext(); //opening fresh browser context
    const page:Page = await  context.newPage(); //opening new page in the browser context

    await page.goto('https://saucelabs.com/resources/demo-app')
    const clickSauceAI = page.locator("(//span[@class='MuiTypography-root MuiTypography-buttonLabel css-15zks1y'])[7]")
    //await clickSauceAI.click()

    // Wait for new page to open after click
    const[newPage] = await Promise.all([
        context.waitForEvent('page'),
        clickSauceAI.click()
    ])

    await newPage.waitForLoadState();
    // Assert new page URL
    await expect(newPage).toHaveURL('https://saucelabs.com/solutions/ai')

    // Work with elements on the new page
    const demoPage = newPage.locator("(//a[.='Book a Demo'])[2]")
    await demoPage.click()
    await newPage.locator("#Email").fill("Test")

    const TrustCenter= newPage.locator("(//span[.='Trust Center'])[1]")
    //await TrustCenter.click()

   
  // Wait for new page1 to open after click
    const[newPage1] = await Promise.all([
        context.waitForEvent('page'),
        TrustCenter.click()
    ])

    await newPage1.waitForLoadState();
    await expect(newPage1).toHaveURL('https://trust.saucelabs.com/')

    await newPage1.locator("//span[.='Request access']").click()
    
    await newPage1.locator("//input[@name='givenName']").fill("Test")
    await newPage1.waitForTimeout(10_000)



})