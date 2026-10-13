import {test, expect} from '@playwright/test';

// for upload multuiple file  - multiple selection attribute is must and type is file

test('fileupload singlefile', async ({page}) => {

await page.goto('https://grotechminds.com/registration/')

const uploadButton=  page.locator("#file");
let path="C:/Users/ASUS/OneDrive/Desktop/Gut Commands.pdf"
await uploadButton.setInputFiles(path);
await page.waitForTimeout(6000)

// for deselect the file only add blank array brackets
await uploadButton.setInputFiles([]);

//upload the file from the buffer memory

await uploadButton.setInputFiles(
    {
        name: "sample.txt", 
        mimeType: "text/plain",
        buffer: Buffer.from("This is a sample file content")
    });
await page.waitForTimeout(6000) 

})

