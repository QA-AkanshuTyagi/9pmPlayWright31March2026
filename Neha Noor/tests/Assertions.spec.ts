import { test, expect } from '@playwright/test';

test('Assertions Validations', async ({ page }) => {
  
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('neha');
 await page.getByPlaceholder('name@example.com').fill('neha@gmail.com');
 await page.getByPlaceholder('Current Address').fill('pune');
 await page.locator('#permanentAddress').fill('agra');
 await page.getByRole('button', { name: 'Submit' }).click();
}
)

  