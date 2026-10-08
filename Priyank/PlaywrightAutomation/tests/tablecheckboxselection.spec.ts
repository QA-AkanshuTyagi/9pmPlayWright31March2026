import { test, expect, Locator } from '@playwright/test';

test('testing', async ({ page }) => {
await page.goto ('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
//const data = 
const checkbox = page.getByRole ('table').filter({hasText : 'Smartphone'}).getByRole('row').filter({hasText : 'Laptop'}).getByRole('checkbox');

await checkbox.check();
await expect (checkbox).toBeChecked();

//console.log(data)
//through xpath
//await page.locator ('//input[@type="checkbox"]').nth(2).check()

})


test('Checkbox', async ({ page }) => {
await page.goto ('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
//const data = 
// const checkboxSelect = page.getByRole('table').filter({hasText:'Smartphone'}).getByRole('row').filter({hasText:'Smartphone'}).getByRole('checkbox')
// await checkboxSelect.check()

const AllCB:Locator = page.locator("//td//input[@type='checkbox']")
let totalCountCheckBoxes:number=await AllCB.count();


for (let i=0;i<totalCountCheckBoxes;i++)
if(i==4 ||i==1|| i==3){
    await AllCB.nth(i).click()
}
})