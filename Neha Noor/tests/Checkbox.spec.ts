import { test, expect } from '@playwright/test';
import { notDeepEqual } from 'node:assert';

test('checkbox functionality', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  // Expect a title "to contain" a substring.
    const firstCheckbox = page.locator('(//input[@type="checkbox"])[1]');
    await firstCheckbox.click();
    await expect(firstCheckbox).toBeChecked();
    notDeepEqual.to

});
