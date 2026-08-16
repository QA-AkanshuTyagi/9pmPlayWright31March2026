import{test, chromium, webkit, firefox} from '@playwright/test';

test('opening 2 browser at single time',async()=>{
let browserName='webkit'
if(browserName=='chrome'){

const chrome= await chromium.launch({headless: false})
 const chromeContext= await chrome.newContext();
let page1= await chromeContext.newPage();
await page1.goto("https://www.facebook.com")
}
else if(browserName=='firefox'){

 const fireFox=await firefox.launch({headless:false})
const fireFoxtContext= await fireFox.newContext();
let page2= await fireFoxtContext.newPage();
await page2.goto("https://www.facebook.com")

}
else if(browserName=='webkit'){

 const webKit= await webkit.launch({headless:false})
const webKitContext= await webKit.newContext();
const page2= await webKitContext.newPage();
}
    

   
   
   

  








});