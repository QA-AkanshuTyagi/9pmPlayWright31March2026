import{test, expect, Locator} from '@playwright/test';

test('Handling Dropdown with Multiple values',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

const country:Locator=  page.locator('#colors')

//await country.selectOption([{index:3},{index:2}])
//await country.selectOption(["Red","Blue"])
await country.selectOption([{label:'Red'},{label:'Green'}])

//await page.waitForTimeout(4000)

})