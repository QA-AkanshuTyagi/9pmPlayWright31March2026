import { test } from '@playwright/test';

test('SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  const addToCartButtons = page.getByRole('button', { name: 'Add to cart' });
  const counts = await addToCartButtons.count();
  console.log('Add to cart buttons:', counts);

  for (let i = 0; i < counts; i++) {
    await addToCartButtons.nth(i).click();
  }
});