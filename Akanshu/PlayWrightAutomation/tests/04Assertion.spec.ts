import {test, expect } from "@playwright/test"


test('Verifying footer elements On Amazon WebSite are visible',async({page})=>{

const url="https://www.amazon.in"
const expectedTitle="Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in"
await page.goto(url);
await page.waitForTimeout(5000);

await expect(page).toHaveTitle(expectedTitle);
const allLinks=page.locator("//a[@class='nav_a']");

const counts= await allLinks.count();

await expect(allLinks).toHaveCount(32);

console.log(counts);
let count=0;
for(let i=1;i<counts;i++){
let textOfEachLink=await allLinks.nth(i).textContent();

console.log(textOfEachLink)
await expect(allLinks.nth(i)).toBeVisible();
count ++;

}











})

