/*
Dropdown ------------------

-- Single data select

--.selectOption({})
4 ways - 
-- value ({})
-- label ({label:})
-- index ({index:0})
-- text ('')

const drop = await page.locator("")
await drop.selectOption({}) --- that's it


-- locator(xpath/CSS)/options
-- Xpath
//input[@class='']/options ---- it will show details under that locator
-- CSS
#country>options



-- Multiple Data select in single dropdown
-- use array
drop.selectOption({})
-- value (['',''])
-- label ([{label:aaa},{label:hssh}])
-- index ([{inedx:2},{index:3}])
-- text (['',''])



*/


import {test, expect} from '@playwright/test'

test ('Dropdown handling for Single Value', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com')
    
    const country_dropdown = await page.locator("#country")

    // values
    // label
    // index
    // text

    //await country_dropdown.selectOption('france')         //Values
    // await country_dropdown.selectOption({label: 'Brazil'})         //Label - always use Text value
    // await country_dropdown.selectOption({index:2})         //index
    await country_dropdown.selectOption('India')         //text

    const dropCount = await page.locator("//select[@id='country']/option")
    await expect(dropCount).toHaveCount(10)

})

test ('Dropdown handling for Multiple Values', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com')
    
    const country_dropdown = await page.locator("#colors")
    // ([])

    //await country_dropdown.selectOption(['yellow','green'])        
    //await country_dropdown.selectOption([{label: 'White'},{label: 'Blue'}])       
    //await country_dropdown.selectOption([{index:1},{index:3}])        
    await country_dropdown.selectOption(['Red','Blue','Green'])         


})

test ('Dropdown handling Hover', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com')
    
    const hover = await page.locator("//button[@class='dropbtn']")

    await hover.getByText('Mobiles').click()         


})


////////////////////////////////////////////////////////////////////////////


test ('Date picker', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com')
    
    await page.locator("//input[@id='datepicker']").click()//.fill('08/12/2026')
    await page.locator("//td[@class=' ui-datepicker-days-cell-over  ui-datepicker-today']").click()

})

