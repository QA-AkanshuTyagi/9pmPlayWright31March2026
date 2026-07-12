import { test, expect } from '@playwright/test';

test.describe('Xpath Axis and Locator', () => {
   test('openBrowser',async ({page})=>{
    await page.goto('https://www.amazon.in/')
    
    // await page.getByRole('link', {name:'Bestsellers'}).click();
    // await page.getByText('Account & Lists ').hover();

    const searching = await page.locator("//input[@aria-label='Search Amazon.in']").fill('iphone')
    const searchIcon = await page.locator("//input[@value='Go']")
    await searchIcon.click();
  });
})