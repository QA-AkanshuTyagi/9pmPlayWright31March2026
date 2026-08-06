import {test,expect} from  '@playwright/test';

test('VerifyingTitle',async({page})=>{
  await page.goto("https://www.amazon.in/");
 // await page.locator('//button[@type="submit"]').click();
  let signInButton = await page.getByText('Account & Lists');
  await signInButton.click();
  const expectedUrl="https://www.amazon.in/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F_encoding%3DUTF8%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0";
  await expect(page).toHaveURL(expectedUrl);
}
)