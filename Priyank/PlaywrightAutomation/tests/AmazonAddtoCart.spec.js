import {test, expect} from '@playwright/test';

test ('Open Page and Search Iphone', async ({page}) =>{

    await page.goto ('https://www.amazon.in/')
    await page.getByRole ('searchbox').fill('Iphone 16')
    await page.getByRole("button", {name : 'Go', exact : true}).click()
    //await page.locator ('//input[@id="nav-search-submit-button"]').click()

})

test ('add to cart few phones', async ({page}) =>{

    await page.goto ('https://www.amazon.in/')
    await page.getByRole ('searchbox').fill('Iphone 16')
    await page.getByRole("button", {name : 'Go', exact : true}).click()

   const phone1 = await page.getByText ('iPhone 16e 128 GB: Built for Apple Intelligence, A18 Chip, Supersized Battery Life, 48MP Fusion. Camera, 15.40 cm (6.1″) Super Retina XDR Display; White', {exact:true})
   console.log(phone1)
   //await page.getByText('Add to cart', {exact:true}).nth(4)
   const addbutton = await page.locator ("//button[@id='a-autoid-1-announce']")
   await addbutton.click()

   const phone2 = await page.getByText ('iPhone 16e 128 GB: Built for Apple Intelligence, A18 Chip, Supersized Battery Life, 48MP Fusion. Camera, 15.40 cm (6.1″) Super Retina XDR Display; Black')
   console.log(phone2)
   await page.locator ("//button[@id='a-autoid-4-announce']").click()

})

test ('Open Add to cart', async ({page}) => {

    await page.goto ('https://www.amazon.in/')
    await page.getByRole ('searchbox').fill('Iphone 16')
    await page.getByRole("button", {name : 'Go', exact : true}).click()

   const phone1 = await page.getByText ('iPhone 16e 128 GB: Built for Apple Intelligence, A18 Chip, Supersized Battery Life, 48MP Fusion. Camera, 15.40 cm (6.1″) Super Retina XDR Display; White')
   console.log(phone1)
   const addbutton = await page.locator ("//button[@id='a-autoid-1-announce']")
   await addbutton.click()

   const phone2 = await page.getByText ('iPhone 16e 128 GB: Built for Apple Intelligence, A18 Chip, Supersized Battery Life, 48MP Fusion. Camera, 15.40 cm (6.1″) Super Retina XDR Display; Black')
   console.log(phone2)
   await page.locator ("//button[@id='a-autoid-4-announce']").click()

   //await page.locator("(//i[@class='a-icon a-icon-close'])[2]").click()
   await page.locator ("(//span[@class = 'nav-line-2'])[3]").click()
   //await page.getByRole ('Button',  {name: "Cart", exact:true})


})

