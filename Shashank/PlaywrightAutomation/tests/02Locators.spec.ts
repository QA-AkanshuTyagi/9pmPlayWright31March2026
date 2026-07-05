import { test, expect } from '@playwright/test';

test('locators', async ({page}) =>{

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name:'Login'}).click();

    await page.getByText('Sauce Labs Backpack').click();
    await page.getByRole('button', {name:'Add to cart'}).click();
    await page.getByRole('button', {name:'Back to products'}).click();
   // await page.getByAltText('Test.allTheThings() T-Shirt (Red)').click();
   
    //const addToCartButton = await page.getByRole('button', {name:'Add to Cart'}).filter({hasText: 'Sauce Labs Bolt T-Shirt'}).textContent();
    //console.log(addToCartButton);
    //await addToCartButton.click();
    await page.getByRole('button',{name:'shopping-cart-link'}).click();

})

