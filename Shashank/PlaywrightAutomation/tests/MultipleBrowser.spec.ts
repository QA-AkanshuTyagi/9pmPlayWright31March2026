import{test, chromium, webkit} from '@playwright/test';
 
test('opening 2 browser at single time',async()=>{
    const chrome= await chromium.launch({headless: false})
 
    const edge= await webkit.launch({headless:false})
   
    const chromeContext= await chrome.newContext();
const edgeContext= await edge.newContext();
 
const page1= await chromeContext.newPage();
 
const page2= await edgeContext.newPage();
 
await page1.goto("https://www.amazon.in")
await page2.goto("https://www.facebook.com") 
})