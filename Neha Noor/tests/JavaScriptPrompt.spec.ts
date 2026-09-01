import { test, expect, BrowserContext, Page } from '@playwright/test';

test('JavaScriptPrompt', async ({ browser }) => {
  const context: BrowserContext = await browser.newContext();
  const page: Page = await context.newPage();

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  const prompt = page.locator("button:has-text('Click for JS Prompt')").first();

  page.on('dialog', async (d) => {
    console.log(d.type(), d.message());
    expect(d.type()).toContain('prompt');
    await d.accept('neha');
     await page.waitForTimeout(4_000);
  })

  await prompt.click();
  await page.waitForTimeout(2_000);
})
