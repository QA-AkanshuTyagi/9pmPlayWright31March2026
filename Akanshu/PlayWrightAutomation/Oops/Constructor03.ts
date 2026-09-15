import { Page, Locator,test } from "@playwright/test";

export class fbLoginPage {
  readonly page: Page;

  public password: Locator;
  readonly loginButtonLocator: Locator;
  readonly userNameLocator: Locator;
  constructor(page: Page) {
    
    this.page = page;
    this.userNameLocator = this.page.locator("#_R_1h6kqsqppb6amH1_");
    this.password = page.locator("_R_1hmkqsqppb6amH1_");
    this.loginButtonLocator = page.locator("//div[@aria-label='Log in']");
  }

  async openBrowser(url: string) {
    await this.page.goto(url);
  }
  async enterUserName(userName: any) {
    await this.userNameLocator.fill(userName);
  }

  async enterPassword(password: any) {
    await this.password.fill(password);
  }

  async clickLogin() {
    await this.loginButtonLocator.click();
  }
}



