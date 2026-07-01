import { test, expect } from '@playwright/test';
 
test('Verifying title', async ({ page }) => {
await page.goto ('https://www.amazon.in/');
const titleAmazon="Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in"
await expect(page).toHaveTitle(titleAmazon);
})
 
test('Verifying url', async({page})=>{
await page.goto ('https://www.amazon.in/');
    let signinButton= page.locator("//span[.='Hello, sign in']");

await signinButton.click();

const expectedUrl='https://www.amazon.in/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0'

await expect(page).toHaveURL(expectedUrl);


}
)
test('to be Visible functionality',async({page})=>{
await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");
const startbutton= page.locator("//button[text()='Start']");
await startbutton.click();
const helloWorldText=page.locator("//h4[.='Hello World!']");

await expect(page.locator("//h4[.='Hello World!']")).toBeVisible({ timeout: 10000 });
 


})