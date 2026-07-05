import { test, expect } from '@playwright/test';
 
test('Verifying element is clickable or not', async ({ page }) => {
await page.goto ('https://demoqa.com/buttons');


const clickMeButton= page.getByRole('button',{name:'Click Me',exact: true});
await clickMeButton.click();
const textAfterClick= page.locator("#dynamicClickMessage");
let textValue=await textAfterClick.textContent();

console.log(textValue)
await expect(textValue=="You have done a dynamic click");

})

test('Verifying "To be Hidden"',async({page})=>{
await page.goto("https://the-internet.herokuapp.com/dynamic_controls")


const checkBox=  page.locator("#checkbox");
const checkBox1=page.locator("//input[@type='checkbox']");
await checkBox1.click();
await expect(checkBox1).toBeChecked();
const removeButton= page.getByRole('button',{name:'Remove',exact:true})
await removeButton.click();
await expect(checkBox).toBeHidden();

})

test('Validating enable/disble functions',async({page})=>{

let product="iphone"
    await page.goto("https://the-internet.herokuapp.com/dynamic_controls")
    const ExpectedUrl=page.url();
const textBox= page.locator("//input[@type='text']")
textBox.fill(product);
await expect(ExpectedUrl.includes(product))
   const enableButton=page.getByRole('button',{name:'Enable',exact:true});
const cartIconCount=await page.locator("//span[@id='nav-cart-count']").textContent();
let carticonCountInteger= Number(cartIconCount);
let Value1=await expect(textBox).toBeDisabled();
console.log(Value1)
let productsToBeAdded=3
await enableButton.click();
await expect(textBox).toBeEnabled();
const allProductsHeading=page.locator("//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal']/span")
const closebutton= page.locator("(//button[@aria-label='Close'])[1]")
for(let i=1;i<=productsToBeAdded;i++){

await allProductsHeading.nth(i).click();
await closebutton.click();
}
let totalProducts= page.locator("//div[@role='listitem']")
let actualCount=await totalProducts.count()

await expect(actualCount).toBe(productsToBeAdded)
await expect(productsToBeAdded).toBe(carticonCountInteger)
})