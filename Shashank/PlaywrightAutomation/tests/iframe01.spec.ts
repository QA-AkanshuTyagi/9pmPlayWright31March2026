import {test,expect, Locator} from '@playwright/test'

//2 type of use to frame by url & name and also by locator 

test('iframeAutomate', async({page}) => {
    await page.goto("https://www.automation-bible.com/iframes")
    //await page.getByPlaceholder("iframe-user").fill("test")

    //using url
    const frames = page.frame({url:/iframe-form.html/})
    await frames?.getByPlaceholder("iframe-user").fill("test")
    await frames?.locator("//select[@name='role']").selectOption({label:'Tester'})
    //await frames?.selectOption({label:'Tester'})
    await frames?.locator("//button[.='Submit inside iframe']").click()
})
    
test('iframeUsingNameScenario_1', async ({page}) => {
    //using Name
    await page.goto("https://qaplayground.com/practice/iframes?utm_source=copilot.com")
    const frameByName = page.frame({name:'basic-frame'})
    await frameByName?.getByPlaceholder("Enter your name").fill('Test')
    await frameByName?.locator("#iframe-submit-btn").click();
})

test('iframeusingLocator', async ({page}) => {

    //using locator
    await page.goto("https://www.automation-bible.com/iframes")
    const frames1 = page.frameLocator("//iframe[@title='iframe-form']")
    await frames1?.getByPlaceholder("iframe-user").fill("test")
    await frames1?.locator("//select[@name='role']").selectOption({label:'Admin'})
    await frames1?.locator("//button[.='Submit inside iframe']").click()
})

test('iframeScenario_2', async ({page}) => {
    //using Name
    await page.goto("https://qaplayground.com/practice/iframes?utm_source=copilot.com")
    const frameByName = page.frame({name:'form-frame'})
    await frameByName?.locator('#iframe-lang-select').selectOption({value:'java'})
    await frameByName?.locator('#iframe-agree-chk').click()
    await frameByName?.locator("#iframe-save-btn").click()

    await page.waitForTimeout(5000)
    //Scenario_3
    const frameOne = page.frame({name:'frame-one'})
    await frameOne?.locator("#f1-action-btn").click()

    await page.waitForTimeout(3000)
    // const frameTwo = page.frame({url:/practice-frames/iframe-multi-2.html})
    // await frameTwo?.getByRole("button",{name:'Activate', exact:true}).click()

    await page.waitForTimeout(3000)
    const frameThree = page.frameLocator("//iframe[@title='Frame Three']")
    await frameThree?.getByRole("button",{name:'Confirm Action', exact:true}).click()

})