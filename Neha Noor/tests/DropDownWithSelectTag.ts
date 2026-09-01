import {test , expect, Locator} from '@playwright/test';

test('Selecttage Dropdown',async({page })=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const country:Locator=page.locator("#country")

//await country.selectOption({index:3})
 //await country.selectOption({value:'india'})
 //await country.selectOption({label:'Australia'})
// await country.selectOption('brazil')

//await page.waitForTimeout(4000);

//})

const Drowdowncount:Locator= page.locator('#country>option');

await expect(Drowdowncount).toHaveCount(10);

})




