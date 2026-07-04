import { test, expect } from '@playwright/test';

test('SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByAltText('Sauce Labs Backpack').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.locator('//button[@name="back-to-products"]').click();
  await page.locator('.shopping_cart_link').click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByPlaceholder('First Name').fill('Neha');
  await page.getByPlaceholder('Last Name').fill('Noor');
    await page.getByPlaceholder('Zip/Postal Code').fill('12345');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Finish' }).click();
}

);