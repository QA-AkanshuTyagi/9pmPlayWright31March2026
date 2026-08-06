import {test, expect }from '@playwright/test';

test('TableHandling', async ({  page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

let tablevalues= await page.getByRole('table').filter({hasText: 'Learn Selenum'}).getByRole('row').filter({hasText:'Learn Selenum'}).getByRole("cell").nth(3).textContent();

console.log(tablevalues);

});

