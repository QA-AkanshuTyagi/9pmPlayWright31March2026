import { test, expect } from "@playwright/test";

test("Slider Concept using Loop", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );

  const minimum = page
    .locator("//span[@class='ui-slider-handle ui-corner-all ui-state-default']")
    .first();

  const maximum = page.locator("(//span[@tabindex=0])").last();

  // // set minimum to zero
  await minimum.focus();

  await minimum.press("Home");
  await page.waitForTimeout(5000);
  // set maximum to zero
  await maximum.focus();
  await maximum.press("Home");

  for (let i = 1; i <= 400; i++) {
    await maximum.press("ArrowRight");
  }

  for (let i = 1; i <= 40; i++) {
    await minimum.press("ArrowRight");
  }
});
