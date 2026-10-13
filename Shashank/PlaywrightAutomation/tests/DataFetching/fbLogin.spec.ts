import {test, expect} from '@playwright/test';
import { data1 } from './object.spec';
import jsonData from './DataSet.json';

test.describe('all login cases of fb using data object/json', () => {
test('login with object', async  ({page}) => {
    await page.goto(data1.url)
    const EmailId = page.locator("//input[@name='email']")
    await EmailId.fill(data1.username)
    const password = page.locator("//input[@name='pass']")
    await password.fill(data1.password)
    await page.locator("(//span[.='Log in'])[2]").click()
});


test('login with Json Data with single data', async  ({page}) => {
    await page.goto(jsonData[0].url)
    const EmailId = page.locator("//input[@name='email']")
    await EmailId.fill(jsonData[0].username)
    const password = page.locator("//input[@name='pass']")
    await password.fill(jsonData[0].password)
    await page.locator("(//span[.='Log in'])[2]").click()
});

});

// test('login', async  ({page}) => {
//     await page.goto('https://www.facebook.com/')
//     const EmailId = page.locator("//input[@name='email']")
//     await EmailId.fill('test@gmail.com')
//     const password = page.locator("//input[@name='pass']")
//     await password.fill('test123')
//     await page.locator("(//span[.='Log in'])[2]").click()
// })