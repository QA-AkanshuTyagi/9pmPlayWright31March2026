import {test,expect} from '@playwright/test';

test('ToBeDispalyed',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");
    const startButton=page.locator("//button[text()='Start']");
    await startButton.click();
    const helloWorld=page.locator("//h4[text()='Hello World!']");
    //await expect(page.locator("//h4[text()='Hello World!']")).toBeVisible();
    await expect(helloWorld).toBeVisible();
    
})

