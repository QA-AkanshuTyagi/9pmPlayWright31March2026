import {test, expect} from '@playwright/test';


test ('check title', async ({page}) =>{

await page.goto('https://www.amazon.in/')
const expectedtitle = 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in'
await expect(page).toHaveTitle(expectedtitle)

})

test ('check URL', async ({page}) =>{

await page.goto('https://www.amazon.in/')  
await page.getByText('Fresh', {exact:true}).click()
const expectedURL = 'https://www.amazon.in/alm/storefront?almBrandId=ctnow&ref_=nav_cs_fresh'
await expect(page).toHaveURL(expectedURL)

})

test ('to check enable(locators)', async ({page})=> {

await page.goto('https://www.amazon.in/')
const search = page.getByRole('searchbox')

await expect(search).toBeEnabled()

await search.click()

})