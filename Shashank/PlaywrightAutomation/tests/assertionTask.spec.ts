import {test,expect} from '@playwright/test';

test('Amazon', async ({page}) =>
{
   await page.goto("https://www.amazon.in/");
   const serachItem = page.getByPlaceholder("Search Amazon.in");
   const expectedText = 'iphone 7'
   await serachItem.fill(expectedText);
   await page.locator("//input[@value='Go']").click();

   
   const resultIphone7 = page.locator("//span[@class='a-color-state a-text-bold']");
   await expect(resultIphone7).toContainText(expectedText);
   
   page.locator("")
   // page.locator("//span[@class='a-size-medium a-color-base a-text-normal']").first().click();

})