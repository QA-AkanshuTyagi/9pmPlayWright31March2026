import { fbLoginPage } from "../Oops/FbLoginPage";
import { test } from "@playwright/test";
import { data } from "../DataFetching/object";
test.describe("running all my login page tests", () => {
  test("login page fucntionality with any credentials", async ({ page }) => {
    const login = new fbLoginPage(page);
    login.openBrowser(data.url);
    login.enterUserName("AKANSHU@GMAIL.COM");
    await page.waitForTimeout(5000);
    login.enterPassword("HELLO BHAI");
    login.clickLogin();
  });

  test("login page fucntionality with incprrect credentials", async ({
    page,
  }) => {
    const login = new fbLoginPage(page);
    login.openBrowser("HTTPS://WWW.FB.COM");
    login.enterUserName("incorrect@GMAIL.COM");
    await page.waitForTimeout(5000);
    login.enterPassword("HELLO BHAI");
    login.clickLogin();
  });
});
