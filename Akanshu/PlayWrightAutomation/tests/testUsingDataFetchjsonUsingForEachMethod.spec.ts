import { fbLoginPage } from "../Oops/FbLoginPage";
import { test } from "@playwright/test";
import { data } from "../DataFetching/object";
import dataset from "../DataFetching/DataSet.json";
test.describe("running all my login page tests", () => {
  let index;

  dataset.forEach((data, index) => {
    test(`login page fucntionality with dataset: ${index}`, async ({
      page,
    }) => {
      const login = new fbLoginPage(page);
      await login.openBrowser(data.url);
      await login.enterUserName(data.username);
      await page.waitForTimeout(5000);
      await login.enterPassword(data.password);
      await login.clickLogin();
    });
  });
});
