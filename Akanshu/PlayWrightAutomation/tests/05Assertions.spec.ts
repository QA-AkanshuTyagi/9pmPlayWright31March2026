import {test,expect} from "@playwright/test";

test('verifying to have attribute',async({page})=>{

    const url="https://www.amazon.in";

page.goto(url)

const searchBox=page.locator("#twotabsearchtextbox")

await expect(searchBox).toHaveAttribute("placeholder","Search Amazon.in")

let  attributeValue=await searchBox.getAttribute("placeholder");
console.log("hello everyone soft nassertion here")

});

test('Validating the attributes present or not',async({page})=>{

page.goto("https://the-internet.herokuapp.com/checkboxes")
const checkbox1= page.locator("(//form[@id='checkboxes']/input)[1]")

await checkbox1.click();
await expect(checkbox1).toHaveAttribute("checked");
console.log("checkbox1 is checked") 

})

test('Validating the "tobe" assertion',async({page})=>{

  const url="https://www.amazon.in";

page.goto(url)
const expectedTitle=""
const title=await page.title();
console.log(title)
await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
const mobile=page.locator("(//a[text()='Mobiles'])[1]")
console.log("hello everyone soft nassertion here")
const actualText=await mobile.textContent();

const ExpectedText= "Mob"

/// await expect(actualText).not.toBe(ExpectedText)

let fullname="rahul tandon"

let expectedfullname="rahul"

await expect(fullname).toContain(expectedfullname)

})