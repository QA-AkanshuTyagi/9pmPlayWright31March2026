import {test,expect} from '@playwright/test'
test('print your valid FirstName and Valid LastName', async ({page}) => {
    await page.goto("https://grotechminds.com/registration/")
    let firstName = 'Shashank'
    let lastName = 'Jain'

    const fname = page.getByPlaceholder('First Name')
    await fname.fill('test')
    const lname = page.getByPlaceholder('Last Name')
    await lname.fill('test')
    
    if(await fname.isVisible() && await lname.isVisible())
    {
        await fname.fill(firstName)
        await lname.fill(lastName)
        console.log("First Name: " + firstName)
        console.log("Last Name: " + lastName)

    }
})