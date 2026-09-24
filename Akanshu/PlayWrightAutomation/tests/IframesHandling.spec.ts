import {test, expect, Locator} from '@playwright/test';


test('Handling Iframes',async({page})=>{

await page.goto('https://grotechminds.com/add-to-cart/')
//const fName:Locator= page.locator("#firstName");





//1st method:
//using name, url
// const iframeValue= page.frame("frame");
//  //const iframeValue= page.frame({url:'https'});
// await iframeValue?.locator("#firstName").fill("akanshu")
// await page.waitForTimeout(5000);

//using framelocator
const iframeValue= page.frameLocator("#frame");
 //const iframeValue= page.frame({url:'https'});
await iframeValue?.locator("#firstName").fill("akanshu")
await page.waitForTimeout(5000);
})




