// 7.goto saucedemo.com and perform to end to end test by adding multiple product 
// and do assertion on each page verifying user is on the page that he clicked for.

import {test, expect} from '@playwright/test';

test ('Open page and check assertions on main page', async ({page})=>{

    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username', {exact:true}).fill('standard_user')
    await page.getByPlaceholder('Password', {exact:true}).fill('secret_sauce')
    await page.getByRole('button',{name : 'Login', exact:true}).click()

    const expectedtitle = 'Swag Labs'
    await expect(page).toHaveTitle(expectedtitle)

    const expectedURL = 'https://www.saucedemo.com/inventory.html'
    await expect(page).toHaveURL(expectedURL)

})

test ('Add to Cart products', async ({page})=>{

    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username', {exact:true}).fill('standard_user')
    await page.getByPlaceholder('Password', {exact:true}).fill('secret_sauce')
    await page.getByRole('button',{name : 'Login', exact:true}).click()

    const add1 = page.locator ('//button[text()="Add to cart"]').first()
    await expect(add1).toBeVisible()

    await add1.click()

    const add2 = page.locator ('//button[text()="Add to cart"]').last()
    await expect(add2).toBeVisible()
    await add2.click()

    const add3 = page.locator ('//button[text()="Add to cart"]').nth(2)
    await expect(add3).toBeVisible()
    await add3.click()

//a[@class='shopping_cart_link']
})

test ('Open Add to Cart page', async ({page})=>{

    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username', {exact:true}).fill('standard_user')
    await page.getByPlaceholder('Password', {exact:true}).fill('secret_sauce')
    await page.getByRole('button',{name : 'Login', exact:true}).click()

    await page.locator ('//button[text()="Add to cart"]').first().click()
    await page.locator ('//button[text()="Add to cart"]').last().click()
    await page.locator ('//button[text()="Add to cart"]').nth(2).click()
    
    await page.locator('//a[@class="shopping_cart_link"]').click()

    let expURLCART = 'https://www.saucedemo.com/cart.html'
    await expect(page).toHaveURL(expURLCART)

    const exprTitleCart = page.getByText('Your Cart')
    await expect(exprTitleCart).toBeVisible()

    const checkout = page.getByText ('Checkout')
    await expect(checkout).toBeEnabled()
})