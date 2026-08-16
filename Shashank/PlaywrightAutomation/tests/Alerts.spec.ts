import{test,expect} from '@playwright/test'

test('JavaScriptAlerts', async({page}) => {
    await page.goto("https://grotechminds.com/alert/")
    const alert = page.getByRole("button",{name:'Alert1', exact:true}).first()
    page.on('dialog', async (dialog) => {
    console.log(dialog.message())
    console.log(dialog.type()) //it is a type of alerts(confirm,alert,prompt)
    await dialog.accept()
    })
    await alert.click()
})
test('JSAlert', async ({page})=>
{

})