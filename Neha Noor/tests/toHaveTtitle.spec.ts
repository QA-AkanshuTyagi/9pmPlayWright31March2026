import {test,expect} from  '@playwright/test';

test('VerifyingTitle',async({page})=>{
  await page.goto("https://www.amazon.in/");
await page.locator('//button[@type="submit"]').click();
  const titleAmazon="Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in";
  await expect(page).toHaveTitle(titleAmazon);
}
)

