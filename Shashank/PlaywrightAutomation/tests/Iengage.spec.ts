import{test,expect,BrowserContext,Page} from '@playwright/test'
test('IengagePopup', async ({browser}) =>
{
     const context:BrowserContext = await browser.newContext(); //opening fresh browser context
     const page:Page = await context.newPage(); //opening new page in the browser context

     page.goto("https://iengage.coforge.com/ess2/login")

     const login =page.getByRole("button", {name:'Click here to login via iEngage credentials', exact:true})
     await login.click()

     //credentials for login
     const employeeID = page.getByPlaceholder("Employee ID")
     await employeeID.fill("00098112")
     const password = page.getByPlaceholder("Password")
     await password.fill("Testing.dev002")
     //await page.waitForTimeout(10_000)
     const loginButton = page.getByRole("button",{name:'Login', exact:true})
     await loginButton.click()
     //await page.waitForTimeout(10_000)

     //assertion Url
     await expect(page).toHaveURL("https://iengage.coforge.com/ess2/NewHomePage/SMHomeView")

     //click on Regime
     const regime =page.getByRole("link",{name:'Click here to act now!',exact:true})
     //await expect(regime).toBeVisible();
     await regime.click()
     await page.waitForTimeout(10_000)

     //click on close
     //const closeButton = page.locator()
})