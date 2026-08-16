import {test,expect, Locator} from '@playwright/test';

test('Handling DropDown with Select tagname',async({page})=>{

await page.goto('https://www.flipkart.com/')
const searchBar:Locator= page.locator("//input[@name='q']").first();
await searchBar.fill("Iphone 17");
await searchBar.click();
await page.waitForTimeout(8000);
const listOfSuggestions:Locator= page.locator('.Swx5kP>div>a');


const count= await listOfSuggestions.count();

// validating total number of countries present in dropdown;



await expect(listOfSuggestions).toHaveCount(8);

for(let i=0;i<count;i++){

await listOfSuggestions.nth(5).click();

}

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