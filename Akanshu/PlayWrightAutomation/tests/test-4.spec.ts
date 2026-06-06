import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=808942225170&hvpos=&hvnetw=g&hvrand=3942777998547407538&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9255436&hvtargid=kwd-10573980&hydadcr=14453_2459472&gad_source=1');
  await page.getByRole('textbox', { name: 'Username:' }).click();
});