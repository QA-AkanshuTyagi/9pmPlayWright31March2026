import { test, expect } from '@playwright/test';

test('assignment', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
// Title of the Page
  await expect(page).toHaveTitle('Swag Labs');
  console.log('Title of the page is : ' + await page.title());

// URL of the Page
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  console.log('URL of the page is : ' + await page.url());

  
  const username = page.getByPlaceholder('Username');
  await username.fill('standard_user');
  const password = page.getByPlaceholder('Password');
  await password.fill('secret_sauce');
 
  await page.getByRole('button', { name: 'Login' }).click();
 
  await expect(page.getByText('Products', { exact: true })).toBeVisible();
  console.log('Login is successful and the Products text is visible on the page');

  await page.locator('#add-to-cart-sauce-labs-backpack').click();
await page.locator('#add-to-cart-sauce-labs-bike-light').click();
await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();
const actualcartcount = await page.locator('.shopping_cart_link').textContent();

//Total Count of Item added in the Cart
const expectedcartcount = '3';
await expect(actualcartcount).toBe(expectedcartcount);
console.log('Cart count is correct and it is : ' + actualcartcount);
await page.locator('.shopping_cart_link').click();

//Checking the Cart Page and validating the count
await expect(page.getByText('Your Cart', { exact: true })).toBeVisible();
console.log('Your Cart text is visible on the page');
const actualcartcount1 = await page.locator('.cart_quantity').count();
const expectedcartcount1 = 3;
await expect(actualcartcount1).toBe(expectedcartcount1);
console.log('Cart count is correct and it is : ' + actualcartcount1);

await page.locator('#checkout').click();
await expect(page.getByText('Checkout: Your Information', { exact: true })).toBeVisible();
console.log('Checkout: Your Information text is visible on the page');

await page.getByPlaceholder('First Name').fill('Rahul');
await page.getByPlaceholder('Last Name').fill('Kumar');
await page.getByPlaceholder('Zip/Postal Code').fill('110001');
await page.locator('#continue').click();
await expect(page.getByText('Checkout: Overview', { exact: true })).toBeVisible();
console.log('Checkout: Overview text is visible on the page');

await page.locator('#finish').click();
await expect(page.getByText('Checkout: Complete!', { exact: true })).toBeVisible();
console.log('Checkout: Complete! text is visible on the page');
});