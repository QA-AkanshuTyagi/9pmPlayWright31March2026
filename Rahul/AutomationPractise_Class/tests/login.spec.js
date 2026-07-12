import {test, expect} from '@playwright/test';

test.describe('Practice learning', () => {

test.skip('has title', async ({ page }) => {
  await page.goto('http://www.facebook.com');

  await expect(page).toHaveTitle(/Facebook/);
  await expect(page.locator('text=Create new account')).toBeVisible();
});

test('amazon practice', async ({ page }) => {
  await page.goto('http://www.amazon.in');

  await page.locator("//input[@id='twotabsearchtextbox']").type('iphone');
  await page.locator("//input[@id='nav-search-submit-button']").click();

  const resultsHeading = page.getByRole('heading', { name: 'Results' });
  await expect(resultsHeading).toBeVisible();
  await expect(resultsHeading).toHaveText('Results');
});
});