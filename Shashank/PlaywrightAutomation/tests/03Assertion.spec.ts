import {test,expect} from "@playwright/test"

test('Amazon Assertion', async ({page}) =>
{
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(5000);
    const footerMenu = page.locator("//a[@class='nav_a']");
//     const counts = await footerMenu.count();
//    console.log(counts);
    for(let i =1; i<= await footerMenu.count(); i++)
    {

    }
})
