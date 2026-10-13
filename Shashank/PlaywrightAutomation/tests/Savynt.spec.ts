import {test,expect,BrowserContext,Page,Browser} from '@playwright/test'

test('SavyntLogin', async ({browser}) => {
    //initiate a browser context --it is used to fresh session means without store cookies & cache
    test.slow();
    const context:BrowserContext = await browser.newContext(); //opening fresh browser context
    const page:Page = await  context.newPage(); //opening new page in the browser context

    await page.goto("https://sdg-partner.saviyntcloud.com/ECM/login/auth")

    //assert URL
    await expect(page).toHaveURL("https://sdg-partner.saviyntcloud.com/ECM/login/auth")
 
    //assert Heading
    // const pageHeading = await page.getByText("Sign in").textContent();
    // await expect(pageHeading).toBe("Sign in")
    const pageHeading = page.getByText("Sign in")
    await expect(pageHeading).toHaveText('Sign in')
    
    //login
    const username = page.getByPlaceholder("Username")
    await username.fill('TestUser3')

    const password = page.getByPlaceholder("Password")
    await password.fill('Demotesting@12345')

    const loginBtn = page.getByRole("button",{name: 'Login', exact:true})
    if(await loginBtn.isVisible()){
        console.log("Login Button is visible")
        await loginBtn.click()
    }
    else{
        console.log("Login Button is not visible")
    }

    //assert welcome Page Text
    // const expectedWelcomeText = "Welcome,Test_Demo Last_Demo!";
    // const actualWelcomeText = page.locator("//h1[@class='welcome-text']").textContent();
    // await expect(actualWelcomeText).toHaveText(expectedWelcomeText);

    const expectedWelcomeText = "Welcome, Test_Demo Last_Demo!";
    const actualWelcomeText = await page.locator("//h1[@class='welcome-text']").textContent();
    console.log("Actual Welcome Text: " + actualWelcomeText);
    expect(actualWelcomeText).toContain(expectedWelcomeText);

    const loginUserName = await page.locator("//div[.='TestUser3']").textContent()
    console.log("Login User Name: " + loginUserName);
    expect(loginUserName).toContain('TestUser')

    //click on Start an access request button
    const startAccessRequestBtn = page.locator("//p[.='Start an Access Request']")
    await startAccessRequestBtn.click()

    //Select dropdown value in Popup
    const dropdown = page.locator("#requesting-dropdown")
    await dropdown.click()
    const dropdownOption = page.getByText("Myself")
    await dropdownOption.click()

    await page.getByText("Application").click()

    //Select Application Page
    const activeTabOnSelApplicationTab = await page.locator("//a[@class='step small']").textContent()
    console.log(activeTabOnSelApplicationTab)
   
    //search for application
    const searchAppName = page.getByPlaceholder("Search by application name or description")
    await searchAppName.fill('SAV4SAV')
    await searchAppName.press('Enter')

    //Assert Search Value is coorect showing
    const expSearchvalue = await page.locator("//h5[.='SAV4SAV']").textContent()
    console.log(expSearchvalue)
    await expect(expSearchvalue).toBe('SAV4SAV') 


    //await searchAppName.waitForTimeout(10_000)

    await page.locator('//a[@onclick="checkepmapTemp(2,\'\')"]/i').click()
    //await page.locator("//button[@fdprocessedid='zkw3bp']").click()

    //Assertion for validate the selected items
    // const expectedSelectedItemCount = '1 Selected'
    // const actualSelectedItemCount =  await page.locator("(//a[@id='viewCartButton']/span)[1]").textContent()
    // console.log(actualSelectedItemCount)
    // await expect(actualSelectedItemCount).toBe(expectedSelectedItemCount)

    // const disableTabs = await page.locator("(//a[@class='step small disabled-step'])[1]").textContent()
    // console.log(disableTabs)

    await page.locator("//a[@id='arsReqAcessCheckout']").click()

    //access page -dynamic puchna hai hand written ni

    const expectedAccessPage = await page.locator(".requestaccessul>h4").textContent()
    console.log(expectedAccessPage)
    expect(expectedAccessPage).toBe('Select Access')

    //Select Entitlement from the list
    //await page.locator("//table[@id='myDataTable4_ALL']/tbody/tr[1]/td[2]/div/a").click()

    //await page.getByRole('table').getByText('ROLE_ADMIN').locator('a#addEntitlement').click()
    
    await page.getByRole('table').filter({hasText:'ROLE_ADMIN'}).locator("(//a[@id='addEntitlement'])[1]").click()
    const expectedSelectedEntitlements = await page.locator("//div[.='Entitlements Not Selected']").textContent()
    console.log(expectedSelectedEntitlements)
    expect(expectedSelectedEntitlements).not.toContainEqual('Entitlements Not Selected')
    await page.locator("//a[@id='arsReqAcessCheckout']").click()
    // if(expectedSelectedEntitlements != 'Entitlements Not Selected'){
    // await page.locator("//a[@id='arsReqAcessCheckout']").click()
    // }
    // else{
    //     console.log('Try Again')
    // }

    //Review Page
    const expectedReviewPage = await page.locator(".step-3-header>div>div>h4").textContent()
    console.log(expectedReviewPage)
    expect(expectedReviewPage).toBe('Review & Justification')

    await page.getByLabel('Comments').fill('Test')
    
    const uploadButton= page.locator("input[type='file']");
    let path="C:/Users/ASUS/OneDrive/Desktop/Dummy Doc.pdf"
    let path1="C:/Users/ASUS/OneDrive/Desktop/Dummy Doc.docx"
    if(!path.endsWith('.pdf'))
        {
           await uploadButton.setInputFiles(path);
           console.log("PDF File uploaded")

         }
    else
        {
        await uploadButton.setInputFiles(path1);
        console.log("Doc file has been uploaded")
        }
    await page.waitForTimeout(2000)

    await page.locator("#disclaimerCheckbox").click()
    await page.locator("//a[.='Submit Request']").click()

    await page.waitForTimeout(10_000)

    
    



})