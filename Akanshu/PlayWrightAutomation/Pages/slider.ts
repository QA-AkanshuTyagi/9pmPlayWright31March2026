import { expect, Locator, Page } from "@playwright/test";

export class SliderConcept {
  page: Page;

  minimum: Locator;
  maximum: Locator;
  constructor(page: Page) {
    this.page = page;

    this.minimum = this.page.locator("(//span[@tabindex=0])[1]");

    this.maximum = this.page.locator("(//span[@tabindex=0])[2]");
  }
  async minimumSlidingToZero() {
    await this.minimum.focus();
    await this.minimum.press("Home");
  }

  async maximumSlidingToZero() {
    await this.maximum.focus();
    await this.maximum.press("Home");
  }
  async maxSliderToRange(value: number) {
    for (let i = 1; i <= value; i++) {
      await this.maximum.press("ArrowRight");
    }
  }
  async minSliderToRange(value: number) {
    for (let i = 1; i <= value; i++) {
      await this.minimum.press("ArrowRight");
    }
  }
}
