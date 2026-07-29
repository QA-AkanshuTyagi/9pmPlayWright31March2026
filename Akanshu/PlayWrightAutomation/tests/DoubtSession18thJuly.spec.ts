import {test, expect} from '@playwright/test'
 
test('tester', async({page}) => {
 
    await page.goto("https://www.saucedemo.com/")
    //const pageTitle = page.getByTitle("Swag Labs")
    await expect(page).toHaveTitle("Swag Labs") // ask to sir
 
    const enterUserName = page.getByPlaceholder("Username")
    await enterUserName.fill("standard_user")
    const enterPassword =page.getByPlaceholder("Password")
    await enterPassword.fill("secret_sauce")
    const loginButton = page.getByRole("button", {name:'Login', exact:true})
    await loginButton.click();
 
    const actualText= page.locator("//span[.='Products']")
    await expect(actualText).toHaveText('Products')
 
    //add products to cart
  const productAdd =  page.locator("//button[.='Add to cart']");
  //   const productAdd = await page.locator("//button[.='Add to cart']").all()
 
   const productCount = await productAdd.count();
    // console.log(productCount)
 
    //  for(const addcart of productAdd)
    //  {
    //      console.log(await addcart.textContent()); 
    //     await addcart.click();
        
    //  }

// for(let i=0;i<productCount; i++){

// await productAdd.first().click();

// }

 await page.waitForTimeout(10_000)
    // await page.locator("#add-to-cart-sauce-labs-backpack").click();
    // await page.locator("#add-to-cart-sauce-labs-bike-light").click();
    // await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    // await page.locator("#add-to-cart-sauce-labs-onesie").click();
  await page.locator("#add-to-cart-test.allthethings()-t-shirt-(red)").click();
 
    const expectedCartTotal = 6
    const actualCarttotal = page.locator("//span[@class='shopping_cart_badge']")
    // it is check the cart count is vissible or notlet
    let totalActualtextContent=  await actualCarttotal.textContent();
//const totalNumber=Number(totalActualtextContent);
 
    // it is used to compare the expected and actual cart count
     expect (totalActualtextContent).toBe(expectedCartTotal.toString()) //ask to sir for count or text
 
    // to check your cart text
    const expectedCartText = 'Your Cart'
    await page.locator("//a[@class='shopping_cart_link']").click()
    const actualCartPage = await page.locator("//span[.='Your Cart']") .textContent()
    await expect.soft(actualCartPage).toBe(expectedCartText) //ask to the sir for actual
 
    //to check remove button count
    const actualRemoveButton = 6
    const checkRemoveButton = page.locator("//button[.='Remove']")
    await expect(checkRemoveButton).toHaveCount(actualRemoveButton)
 
    // to check checkout button visibility
    const visibleCheckOutBtn =page.locator("//button[.='Checkout']")
    await expect(visibleCheckOutBtn).toBeVisible()
    await visibleCheckOutBtn.click()
 
    await page.locator("#first-name").fill("Automation")
    await page.locator("#last-name").fill("Tester")
    await page.locator("#postal-code").fill("282282")
 
    // to check continue button visibility
    const continueButton = page.locator("#continue")
    await expect(continueButton).toBeVisible()
    await continueButton.click()
 
    // to check finish button visibility
    const expectedFinihgButton = page.locator("#finish")
    await expect(expectedFinihgButton).toBeVisible()  
    await expectedFinihgButton.click()
 
    // to check Thankyou Text
    const actualThankyouPage = 'Thank you for your order!'
    const expectedThankyouPage = page.locator("//h2[.='Thank you for your order!']")
    await expect(expectedThankyouPage).toHaveText(actualThankyouPage)
 
    console.log("Test case is passed successfully")
 
 
 
 
 
 
 
 
//    // await page.locator("//button[.='Add to cart']").nth(4).click();
})
 