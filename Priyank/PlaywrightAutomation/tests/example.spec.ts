import { test, expect } from '@playwright/test';

test('testing', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  // await page.getByRole('button', { name: '✕' }).click();
  await page.locator('(//input[contains(@class,"nav-input nav-progressive-attribute")])[1]').fill('Nike Shoes');
  await page.locator('(//input[contains(@class,"nav-input nav-progressive-attribute")])[2]').click();
  await page.getByText("Nike Mens Promina Walking Shoes", {exact : true}).first().click();

  const expectedValue = "₹4,995";
  //through class
  //const priceText = await page.locator('(//span[contains(@class,"a-price-whole")])[1]').textContent();
// through text
  const priceText = await page.locator('//span[.="₹4,995"]').textContent();
// text content means it will give you the text content of the element, which is the visible text that is displayed on the webpage.

/*
- getbyText - it will find the element based on the exact text content. It will return the first element that matches the specified text.
- locator - it is a more flexible method that allows you to locate elements using various strategies, such as CSS selectors, XPath, or text content. It provides more options for finding elements on the page. 
- getbyPlaceholder - it will find the element based on the placeholder attribute. It is commonly used for input fields where you want to locate an element based on the placeholder text.
- getbyRole - it will find the element based on its role attribute. It is useful for locating elements that have specific roles, such as buttons, links, or form controls.
- getbyaltText - it will find the element based on the alt attribute. It is commonly used for images where you want to locate an element based on the alternative text provided in the alt attribute.
- getbyTestId - it will find the element based on a custom data attribute called "data-testid". It is often used for testing purposes to uniquely identify elements on the page.

*/
console.log('expectedValue:', expectedValue);
  console.log('actualValue:', priceText);

  await expect(priceText).toBe(expectedValue);


});

