import {test, expect, BrowserContext, Context, Page} from '@playwright/test'

test ('HTML Popup', async ({page}) =>{

    await page.goto ('https://www.airbnb.co.in/')
    await page.locator ("//div[@data-testid='modal-container']").waitFor({state: 'visible'})
    //await page.waitForTimeout(7000)
    await page.getByRole('button', {name: 'Close'}).click()



})