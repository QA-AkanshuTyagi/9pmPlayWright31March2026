import { expect,test} from '@playwright/test';

test('NewRequest self',async({page})=>{

let userNameValue='TestUser2';
let passwordValue='Testing@1234567890';
const userName= page.locator("#username");

const password= page.getByPlaceholder("Password")
const loginButton= page.getByRole('button',{name:'Login'});
const accessRequestLocator= page.getByText('Start an Access Request');
const welcomeText= page.locator('.welcome-text')
const requestDropdown=page.locator('#requesting-dropdown');
const selfRequestOption= page.getByText('MySelf');
const applicationButton=page.getByText('Application');
const step1= page.locator("//li[@data-step='1']");
const HeadingOfStep1=page.locator("//div[@class='requestaccessul']/h4");


await page.goto('https://sdg-partner.saviyntcloud.com/ECM/login/auth');




await userName.fill(userNameValue);
await password.fill(passwordValue);

await loginButton.click();

let text=await welcomeText.textContent();
let expectedText='Welcome'
//assertion for welcomePage
expect(text).toContain(expectedText);
await accessRequestLocator.click();
await requestDropdown.click();
await selfRequestOption.click();
await applicationButton.click();
let valueOfStep1=await step1.getAttribute('class');
let ExpectedHeading='Select Application';
let actualHeading= await HeadingOfStep1.textContent();
await expect (valueOfStep1).toContain('active');
await expect(actualHeading).toEqual('ExpectedHeading');


})
