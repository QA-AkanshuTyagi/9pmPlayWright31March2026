import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {

    await page.goto ('https://www.saucedemo.com/')
    await page.getByPlaceholder("Username",{exact: true}).fill('standard_user')
    await page.getByPlaceholder("Password",{exact : true}).fill('secret_sauce')
    await page.locator('//input[@id = "login-button"]').click()

    await page.getByText ("Sauce Labs Fleece Jacket").textContent()

    const pricehomepage = await page.locator('//div[@class="inventory_item_price"]').nth(3).textContent()
    console.log('Price in homePage is - ' + pricehomepage)

    await page.locator('//button[@id="add-to-cart-sauce-labs-fleece-jacket"]').click()
    await page.locator('//div[@id="shopping_cart_container"]').click()

    const priceAddtoCart = await page.locator('//div[@class="inventory_item_price"]').textContent()
    console.log('Price in Add to Cart page is -' + priceAddtoCart)

    if (pricehomepage == priceAddtoCart){
        console.log('Price is Matching')
    } else 
        console.log('Price is not matching')


await page.locator('//button[@id ="checkout"]').click()

await page.getByPlaceholder('First Name', {exact : true}).fill('Priyank')
await page.getByPlaceholder('Last Name',{exact : true}).fill('Test')
await page.getByPlaceholder ('Zip/Postal Code',{exact : true}).fill('12345')
await page.locator('//input[@id ="continue"]').click()

  const priceshop = await page.locator('//div[@class ="inventory_item_price"]').textContent()
    console.log('Price in homePage is - ' + priceshop)

if (priceAddtoCart==priceshop){
    console.log('Price is matching in Shop page')
}else 
    console.log('Price is not matching')

})