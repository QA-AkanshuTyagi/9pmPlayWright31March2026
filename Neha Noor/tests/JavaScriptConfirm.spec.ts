import { test, expect, BrowserContext, Page } from '@playwright/test';

test('JavaScriptConfirm', async({browser}) =>{

    const context:BrowserContext= await browser.newContext()
    const page:Page=await context.newPage()

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    const confirm=page.locator("//button[.='Click for JS Confirm']").first();

  page.on('dialog', async (d) => {
    console.log(d.type(), d.message());
    expect(d.type()).toContain('confirm');
    await page.waitForTimeout(6_000);
    //await d.accept();
    await d.dismiss();
    
  });

  await confirm.click();
  //await page.waitForTimeout(6_000);
});