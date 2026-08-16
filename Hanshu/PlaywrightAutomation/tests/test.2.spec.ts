import{test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.locator('[id="twotabsearchtextbox"]').fill('iphone 16');
await page.locator('id="nav-search-submit-button"').click();

//await page.getByAltText("Sponsored Ad - iPhone 16e 128 GB: Built for Apple Intelligence, A18 Chip, Supersized Battery Life, 48MP Fusion. Camera, 15.40 cm (6.1″) Super Retina XDR Display; Black")
const countValue:= await page.locator('iPhone 16').count();
console.log('hello')
console.log(countValue);

}); 
