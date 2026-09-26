/*

MOUSE ACTIONS ----------

// mouse

---- click
// by default it will consider left
//bounding box == help to find coordinates of any elements (x and y axis)
// coordinates -- x & y axis , height & width 
// null response coordinates -- when the element is not present

test ('TC1', async({})=>{

await page.goto('')
const button = page.locator("")
const box = button.boundingbox()
console.log(box)
if(box){
await page.mouse.click(box.x+box.width/2, box.y+box.height/2)
console.log(box.x)
console.log(box.y)
}

})

---- right/left/middle click

test ('TC1', async({})=>{

await page.goto('')
const button = page.locator("")
const box = button.boundingbox()
console.log(box)
if(box){
await page.mouse.click(box.x+box.width/2, box.y+box.height/2,{button:'right'})
-- right/left/middle
------ by default left click krega
console.log(box.x)
console.log(box.y)
}

})

---- double click

test ('TC1', async({})=>{

await page.goto('')
const button = page.locator("")
const box = button.boundingbox()
console.log(box)
if(box){
await page.mouse.dblclick(box.x+box.width/2, box.y+box.height/2)
console.log(box.x)
console.log(box.y)
console.log(box.width)
console.log(box.height)

}

})


---- mouse move

test ('TC1', async({})=>{

await page.goto('')
const button = page.locator("")
const box = button.boundingbox()
console.log(box)
if(box){
await page.mouse.move(box.x+box.width/2, box.y+box.height/2)
console.log(box.x)
console.log(box.y)
console.log(box.width)
console.log(box.height)

}

})

---- Drag and drop using mouse

test ('TC1', async({})=>{

await page.goto('')
const source = page.locator("")
const sbox = source.boundingbox()
const location = page.locator("")
const lbox = location.boundingbox()


if(sbox && lbox){
await page.mouse.move(sbox.x+sbox.width/2, sbox.y+sbox.height/2)
await page.mouse.down()
await page.mouse.down(lbox.x+lbox.width/2, lbox.y+lbox.height/2)
await page.mouse.up()
}

})

---- scrolling

test ('TC1', async({})=>{

await page.goto('')
const source = page.locator("")// till this location scroll krega
const sbox = source.boundingbox()

if(sbox){
await page.mouse.wheel(sbox.x+sbox.width/2, sbox.y+sbox.height/2)

}
})


--scroll up 

test ('TC1', async({})=>{

await page.goto('')
const source = page.locator("")// from this location scroll up krega
const sbox = source.boundingbox()
const target = page.locator("")// to this location scroll krega
const tbox = target.boundingbox()

if(sbox && tbox){
await page.mouse.wheel(sbox.x+sbox.width/2, sbox.y+sbox.height/2)
await page.waitfortimeout(5000)

await page.mouse.wheel(tbox.x+tbox.width/2, tbox.y+tbox.height/2)

}
---- Move

test ('TC1', async({})=>{

await page.goto('')
const login = page.locator("")//
const loginbox = login.boundingbox()

if(loginbox){
await page.mouse(loginbox.x+loginbox.width/2, loginbox.y+loginbox.height/2)

}

})


---- Hover

test ('TC1', async({})=>{

await page.goto('')
const login = page.locator("")//
await login.hover()

})

})

*/



import {test, expect} from '@playwright/test'

test('Mouse Click ', async ({page}) => {

await page.goto('https://www.google.com/')
const AboutButton = page.locator("//a[@class='w5hRs']").first()
const box = await AboutButton.boundingBox()

console.log(box)

await page.mouse.click(box.x+box.width/2,box.y+box.height/2)


})

test('Hover', async ({page}) => {

await page.goto('https://www.google.com/')
const Hover = page.locator("//span[@class='wPSZBe']")


await Hover.hover()


})