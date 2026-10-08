/*

Keyboard actions --------
//press - key

// enter key
// jb bhi koi key likhenge wo aise likhenge - Enter, Tab -- phla wrd caps

await locator.fill()
await page.keyboard.press('Enter')


// Arrowup key - for loop

await locator.fill()
for(let i=1;i<=4;i++){
await page.keyboard.press('ArrowUp')
await timeout 
}

// Arrowdown key - for loop

await locator.fill()
for(let i=1;i<=4;i++){ //(let i=0;i<4;i++)
await page.keyboard.press('ArrowDown')
await timeout 
}


// type value using keyboard

await locator.click()
await page.keyboard.type("hghh")
for(let i=1;i<=4;i++){ //(let i=0;i<4;i++)
await page.keyboard.press('ArrowDown')
await timeout 
}


// keyboard Short cut

await locator.click()
await page.keyboard.type("hghh")

await page.keyboard.press('Control+A')

await timeout
for(let i=1;i<=4;i++){ //(let i=0;i<4;i++)
await page.keyboard.press('ArrowDown')
await timeout 
}

// keyboard Short cut copy and paste

await locator.click()
await page.keyboard.type("hghh")

await page.keyboard.press('Control+A')

await page.keyboard.press('Control+C')
await locator.click()
await page.keyboard.press('Control+V')

await timeout

}

*/