import { fbLoginPage } from "../Oops/FbLoginPage";
import { test } from "@playwright/test";
import { data } from "../DataFetching/object";

test.describe("running all my login page tests", () => {
  test("login page fucntionality with any credentials", async ({ page }) => {
    const login = new fbLoginPage(page);
    await login.openBrowser(data.url);
    await login.enterUserName(data.username);
    await page.waitForTimeout(5000);
    await login.enterPassword(data.password);
    await login.clickLogin();
  });
});
