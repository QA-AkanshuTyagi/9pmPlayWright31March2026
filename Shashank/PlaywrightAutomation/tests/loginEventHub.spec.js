import { test, expect } from '@playwright/test';

test('login1', async ({page}) => {

   await page.goto('https://eventhub.rahulshettyacademy.com/login')

   const email=page.getByLabel('Email');
   await email.fill('testing.dev004@gmail.com');

   const pass = page.getByLabel('Password');
   await pass.fill('Testing.dev001');

   const signInBtn = page.getByRole('button', {name: 'Sign In'});
   await signInBtn.click();

   // const expectedURL = 'https://eventhub.rahulshettyacademy.com/';
   // await expect(page).toHaveURL(expectedURL);
////span[@id='user-email-display']
   const expectedUserId = page.locator("//span[.='testing.dev0@gmail.com']");
   await expect(expectedUserId).toBeVisible();
})

test('assertion', async ({page})=>{
   await page.goto("https://demoqa.com/text-box");

   let fullName='Shashank';
   const FullName =  page.getByPlaceholder('Full Name');
   await FullName.fill(fullName);

   let mail = 'testing.dev004@gmail.com';
   const email =  page.getByPlaceholder('name@example.com');
   await email.fill(mail);

   let cAdd = 'Greater Noida';
   const currentAddress =  page.getByPlaceholder('Current Address');
   await currentAddress.fill(cAdd);

   let pAdd = 'Agra';
   const permanentAddress =  page.locator("#permanentAddress");
   await permanentAddress.fill(pAdd);

   const submit =  page.getByRole('button',{name: 'Submit', exact:'true'});
   await submit.click();

   const name = page.locator("#name");
   const emailId = page.locator("#email");
   const curAdd= page.locator("#currentAddress");
   const perAdd=  page.locator("#permanentAddress");

  console.log( await name.textContent());
   // await emailId.textContent();
   // await curAdd.textContent();
   // await perAdd.textContent();

   await expect(name).toContainText(fullName);



   

   


})