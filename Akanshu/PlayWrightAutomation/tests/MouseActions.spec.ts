import {test,expect, Locator} from '@playwright/test';


test('Mouse actions-LeftCLick',async({page})=>{

await page.goto('https://www.google.com/')
const searchnBox=page.locator("#ti6dpd")
await searchnBox.fill("hello world")
const button= page.locator("(//input[@value='Google Search'])").last();
const box= await button.boundingBox();

console.log(box);

if(box){
await page.mouse.click(box?.x+box.width/2,box?.y+box.height/2);
console.log(box.x);
console.log(box.y);
console.log(box.width);
console.log(box.height);
}





})
test('Mouse actions-RightClick',async({page})=>{

await page.goto('https://www.google.com/')
const searchnBox=page.locator("#ti6dpd")
await searchnBox.fill("hello world")
const button= page.locator("(//input[@value='Google Search'])").last();
const box= await button.boundingBox();

console.log(box);

if(box){
await page.mouse.click(box?.x+box.width/2,box?.y+box.height/2,{button:'right'});
console.log(box.x);
console.log(box.y);
console.log(box.width);
console.log(box.height);
}





})
test('Mouse actions-DoubleClick',async({page})=>{

await page.goto('https://grotechminds.com/left-double-click/')
const searchnBox=page.locator("#ti6dpd")
const button= page.locator("//div[contains(text(),'Doubleclick1')]").first();
const box= await button.boundingBox();

console.log(box);

if(box){
await page.mouse.dblclick(box?.x+box.width/2,box?.y+box.height/2);
console.log(box.x);
console.log(box.y);
console.log(box.width);
console.log(box.height);
}





})

test('Mouse actions-MoveMouse',async({page})=>{

await page.goto('https://grotechminds.com/left-double-click/')
const searchnBox=page.locator("#ti6dpd")
const button= page.locator("//div[contains(text(),'Doubleclick1')]").first();
let box= await button.boundingBox();

console.log(box);

if(box){
await page.mouse.move(box?.x+box.width/2,box?.y+box.height/2);
console.log(box.x);
console.log(box.y);
console.log(box.width);
console.log(box.height);
}

})

 
test('Mouse actions-DragAndDrop',async({page})=>{

await page.goto('https://grotechminds.com/drag-and-drop/')
const source=page.locator("#drag2")
const location=page.locator("#div2").first();
//const button= page.locator("//div[contains(text(),'Doubleclick1')]").first();

await source.dragTo(location);

await page.pause();

// const box= await button.boundingBox();

// console.log(box);

// if(box){
// await page.mouse.move(box?.x+box.width/2,box?.y+box.height/2);
// console.log(box.x);
// console.log(box.y);
// console.log(box.width);
// console.log(box.height);
// }

 })

 test('Mouse actions-DragAndDropUsingMouse',async({page})=>{

await page.goto('https://grotechminds.com/drag-and-drop/')
const source=page.locator("#drag2")
const sourceBox= await source.boundingBox();

const location=page.locator("#div2").first();
const locationBox= await location.boundingBox();
//const button= page.locator("//div[contains(text(),'Doubleclick1')]").first();
if(sourceBox && locationBox){
await page.mouse.move(sourceBox?.x+sourceBox.width/2,sourceBox?.y+sourceBox.height/2);
await page.mouse.down()
await page.mouse.move(locationBox?.x+locationBox.width/2,locationBox?.y+locationBox.height/2);
await page.mouse.up()

}

// if(box){
// await page.mouse.move(box?.x+box.width/2,box?.y+box.height/2);
// console.log(box.x);
// console.log(box.y);
// console.log(box.width);
// console.log(box.height);
// }

 })


 test('Mouse actions-Scrolling',async({page})=>{

await page.goto('https://grotechminds.com/drag-and-drop/')
const refundPolicy=page.locator("//a[.='Refund Policy']").first()
const refundPolicyBox= await refundPolicy.boundingBox();
const logo=page.locator("#drag2")
const logoBox= await logo.boundingBox();

//const button= page.locator("//div[contains(text(),'Doubleclick1')]").first();
if(refundPolicyBox && logoBox){
await page.mouse.wheel(refundPolicyBox?.x+refundPolicyBox.width/2,refundPolicyBox?.y+refundPolicyBox.height/2);
await page.waitForTimeout(3000)
await page.mouse.wheel(logoBox?.x+logoBox.width/2,-(logoBox?.y+logoBox.height/2));

}})

test('Mouse actions-Hovering',async({page})=>{

await page.goto('https://www.flipkart.com/')
const LoginButton=page.locator("//span[.='Login']")
const LoginButtonBox= await LoginButton.boundingBox();


//const button= page.locator("//div[contains(text(),'Doubleclick1')]").first();
if(LoginButtonBox ){
await page.mouse.move(LoginButtonBox?.x+LoginButtonBox.width/2,LoginButtonBox?.y+LoginButtonBox.height/2);
await page.pause()

}})
test('Without Mouse actions-Hovering',async({page})=>{

await page.goto('https://www.flipkart.com/')
const LoginButton=page.locator("//span[.='Login']")
await LoginButton.hover();
await page.pause()

})