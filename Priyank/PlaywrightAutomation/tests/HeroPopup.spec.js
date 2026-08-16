import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';

test('Handle Alert_Popup', async ({ page }) => {

   await page.goto('https://the-internet.herokuapp.com')
   await page.getByText("JavaScript Alerts", {exact:true}).click()

   const alert = page.getByText("Click for JS Alert", {exact:true})

   page.on('dialog', async(dialog)=>{
    console.log(dialog.type(), dialog.message())
    await page.waitForTimeout(2500)
    await dialog.accept()

   })
   await alert.click() 
})  

test('Handle Confirm_Popup', async ({ page }) => {

   await page.goto('https://the-internet.herokuapp.com')
   await page.getByText("JavaScript Alerts", {exact:true}).click()

   const alert = page.getByText("Click for JS Confirm", {exact:true})

   page.on('dialog', async(dialog)=>{
    console.log(dialog.type(), dialog.message())
    await page.waitForTimeout(2500)
    //await dialog.accept() // for Accept
    await dialog.dismiss() // for cancel

   })
   await alert.click() 
})  

test('Handle Prompt_Popup', async ({ page }) => {

   await page.goto('https://the-internet.herokuapp.com')
   await page.getByText("JavaScript Alerts", {exact:true}).click()

   const alert = page.getByText("Click for JS Prompt", {exact:true})

   page.on ('dialog', async (dialog) =>{
    console.log(dialog.type(), 'and', dialog.message())
    await page.waitForTimeout(2000)
    await dialog.accept('Priyank') // for Accept
   // await dialog.dismiss() // for cancel
    
   })

   await alert.click() 
})  

test ('popup with assertions', async ({page}) =>{

   await page.goto('https://the-internet.herokuapp.com')
   await page.getByText("JavaScript Alerts", {exact:true}).click()

   const alert = page.getByText("Click for JS Confirm", {exact:true})

   page.on('dialog', async (dialog)=>{
    console.log(dialog.type(), dialog.message())
    await expect(dialog.type()).toContain('confirm')
    await page.waitForTimeout(3000)
     await dialog.accept()

   })

   await alert.click()


})