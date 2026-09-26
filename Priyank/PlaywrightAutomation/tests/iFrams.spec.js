import {test} from '@playwright/test'

test ('iFrame handling',async({page})=>{

 //1st way
 // using name, URL   
    await page.goto('https://grotechminds.com/add-to-cart/')
    // await page.locator('#firstName').fill('Priyank')
    // await page.locator('#lastName').fill('Test')

    const FrameValue = page.frame('frame')
    await FrameValue.locator("#firstName").fill('Priyank')
    await FrameValue.locator("#lastName").fill('Test')
    await FrameValue.getByRole('button',{name:'Submit'}).click()

//Name
// const FrameValue = page.frame('frame')

//Url ---
// const FrameValue = page.frame({url:'https://'})


})

/////// 2nd way
// using frame locator

test ('iFrame using Frame locator',async({page})=>{
 
    await page.goto('https://grotechminds.com/add-to-cart/')

    const FrameValue = page.frameLocator('#frame')
    await FrameValue.locator("#firstName").fill('Priyank')
    await FrameValue.locator("#lastName").fill('Test')
    //await FrameValue.getByRole('button',{name:'Submit'}).click()

})