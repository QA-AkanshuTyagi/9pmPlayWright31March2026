import { fbLoginPage } from "../Oops/FbLoginPage";
import { test } from "@playwright/test";
import { data } from "../DataFetching/object";
import dataset from "../DataFetching/DataSet.json";
test.describe("running all my login page tests", () => {
  for (let i = 0; i < dataset.length; i++) {
    test(`login page fucntionality with dataset: ${i}`, async ({ page }) => {
      const login = new fbLoginPage(page);
      await login.openBrowser(dataset[i].url);
      await login.enterUserName(dataset[i].username);
      await page.waitForTimeout(5000);
      await login.enterPassword(dataset[i].password);
      await login.clickLogin();
    });
  }
});
