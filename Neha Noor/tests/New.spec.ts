import { test,expect } from '@playwright/test';

test('getByRole', async({page})=>{
  await page.goto('https://www.amazon.in');


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

