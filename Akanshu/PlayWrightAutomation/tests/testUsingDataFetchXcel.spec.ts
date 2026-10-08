import { fbLoginPage } from "../Oops/FbLoginPage";
import { test } from "@playwright/test";

import { readExcel } from "../Oops/Utils/ExcelReader";

test.describe("running all my login page testsUsing excel", () => {
  const dataset: any[] = readExcel("Sheet1");
  console.log(dataset);
  dataset.forEach((data, index) => {
    test(`login page fucntionality with dataset using Xcel: ${index}`, async ({
      page,
    }) => {
      const login = new fbLoginPage(page);
      await login.openBrowser(data.Url);
      await login.enterUserName(data.UserName);
      await login.enterPassword(data.Password);
      await login.clickLogin();
    });
  });
});
