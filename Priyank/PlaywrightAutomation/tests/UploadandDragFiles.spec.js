import {test, expect} from '@playwright/test'

test ('Upload a single file', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const file = page.locator("#singleFileInput")
    // Always use / this in path instead of \
    const filePath = 'C:/New Github Rep/9pmPlayWright31March2026/Priyank/PlaywrightAutomation/tests/Files/Form Load july.xlsx'

    await file.setInputFiles(filePath)


})

test ('Upload Multiple files', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const multifile = page.locator("#multipleFilesInput")
    // Always use / this in path instead of \
    const filesPath = (['C:/New Github Rep/9pmPlayWright31March2026/Priyank/PlaywrightAutomation/tests/Files/Form Load july.xlsx','C:/New Github Rep/9pmPlayWright31March2026/Priyank/PlaywrightAutomation/tests/Files/TD.xlsx'])

    await multifile.setInputFiles(filesPath)


})

test ('Drag files', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const Dragfield = page.locator("//div[@id='draggable']")
    const location = page.locator("//div[@id='droppable']")

    await Dragfield.dragTo(location)


})

test('DragAndDrop', async ({page}) => {

await page.goto('https://grotechminds.com/drag-and-drop/')

const symbol=  page.locator("#drag2");
const location= page.locator("//div[@id='div2']")
await symbol.dragTo(location);

})