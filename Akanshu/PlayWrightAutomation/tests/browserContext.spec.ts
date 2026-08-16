
import{test, expect,BrowserContext,Page, Browser} from 'playwright/test';


test('learningBrowserContext', async ({browser,page}) => {

    //initiate browser context
const context:BrowserContext= await browser.newContext();
//const page:Page=context.newPage();
//const page:Page=await context.newPage();

await page.goto('https://the-internet.herokuapp.com/windows');


const clickHere=page.locator("//a[.='Click Here']");




const [newPage]= await Promise.all([ context.waitForEvent('page'),clickHere.click()]);

await newPage.waitForLoadState();
const text= await newPage.locator("//h3[.='New Window']").textContent();

console.log(text)
 //   const context:BrowserContext= await browser.newContext();
//'https://the-internet.herokuapp.com/windows'
    //OPENING TAB IN NEW BROWSER:









 // await page.locator("//h3[.='New Window']").textContent();


})
