import {test, expect} from '@playwright/test';
import jsonData1 from '../DataFetching/DataSet.json';

test.describe('login of fb using multiple JSON data', () => {
for(let i = 0; i<jsonData1.length;i++)
    {
        test(`login multiple data ${i}`, async  ({page}) => { // $[i] is used to display the unique index of the data being used in the test name
            await page.goto(jsonData1[i].url)
            const EmailId = page.locator("//input[@name='email']")
            await EmailId.fill(jsonData1[i].username)
            const password = page.locator("//input[@name='pass']")
            await password.fill(jsonData1[i].password)
            await page.locator("(//span[.='Log in'])[2]").click()
        });
    }
});
