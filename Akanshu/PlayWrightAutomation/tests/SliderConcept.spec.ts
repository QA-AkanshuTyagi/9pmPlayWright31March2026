import { test, expect, Locator } from "@playwright/test";
import { SliderConcept } from "../Pages/slider";
import { fbLoginPage } from "../Oops/FbLoginPage";
test("Slider Handling using drag to", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );

  const minimum: Locator = page.locator("(//span[@tabindex=0])[1]");

  const maximum: Locator = page.locator("(//span[@tabindex=0])[2]");

  await minimum.dragTo(maximum);

  await page.waitForTimeout(5000);
});
test("Slider Handling using Loops", async ({ page }) => {
  let sliderConceptObject;
  let lp;
  lp = new fbLoginPage(page);
  lp.openBrowser(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
  sliderConceptObject = new SliderConcept(page);
  await sliderConceptObject.minimumSlidingToZero();
  await sliderConceptObject.maximumSlidingToZero();
  await sliderConceptObject.maxSliderToRange(400);

  await sliderConceptObject.minSliderToRange(200);
  await page.waitForTimeout(5000);
});
