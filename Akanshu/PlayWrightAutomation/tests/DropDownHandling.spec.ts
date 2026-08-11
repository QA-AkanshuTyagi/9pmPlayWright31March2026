import {test,expect, Locator} from '@playwright/test';

test('Handling DropDown with Select tagname',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

const country:Locator= page.locator('#country');
//await country.selectOption({value:'uk'});
// await country.selectOption({label:'India'});
//await country.selectOption({index:3});
// await country.selectOption('India');

await page.waitForTimeout(4000);

// validating total number of countries present in dropdown;

const dropdownCount:Locator= page.locator("#country>option");

await expect(dropdownCount).toHaveCount(10);

})
test('Handling DropDown with multiple values',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

const country:Locator= page.locator('#colors');
await country.selectOption(['red','blue','green']);
// await country.selectOption([{label:'Yellow'},{label:'Blue'}]);
//await country.selectOption([{index:2},{index:3}]);
 //await country.selectOption(['Red','Blue']);

await page.waitForTimeout(4000);

// validating total number of countries present in dropdown;
// ctrl+shift +p  and use Emulate a focused page(it will only works when your console is open)

 
})