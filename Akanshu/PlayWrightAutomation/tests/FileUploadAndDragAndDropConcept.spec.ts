import {test, expect} from '@playwright/test';

test('fileupload singlefile', async ({page}) => {

await page.goto('https://grotechminds.com/registration/')

const uploadButton=  page.locator("#file");
let path="C:/GitHubRepos/9pm Playwright/9pmPlayWright31March2026/Akanshu/PlayWrightAutomation/tests/DataFiles/Mobile_App_Test_Plan_Release_1.0.docx"
await uploadButton.setInputFiles(path);
await page.waitForTimeout(6000)
})
test('fileupload multiple files', async ({page}) => {

await page.goto('https://grotechminds.com/registration/')

const uploadButton=  page.locator("#file");
await uploadButton.setInputFiles(["C:/GitHubRepos/9pm Playwright/9pmPlayWright31March2026/Akanshu/PlayWrightAutomation/tests/DataFiles/Mobile_App_Test_Plan_Release_1.0.docx","C:/GitHubRepos/9pm Playwright/9pmPlayWright31March2026/Akanshu/PlayWrightAutomation/tests/DataFiles/Financial Planning Bugs on Production.xlsx"]);
await page.waitForTimeout(6000)
})
test('DragAndDrop', async ({page}) => {

await page.goto('https://grotechminds.com/drag-and-drop/')

const symbol=  page.locator("#drag2");
const location= page.locator("//div[@id='div2']")
await symbol.dragTo(location);
await page.waitForTimeout(6000)
})