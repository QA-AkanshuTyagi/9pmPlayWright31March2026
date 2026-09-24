import {test} from '@playwright/test';

test('t01',{tag:'@regression'},async({page})=>{

console.log("t01 test case is running")

})

test('t02',{tag:'@smoke'},async({page})=>{
console.log("t02 test case is running")


})
test('t03',{tag:'@regression'},async({page})=>{
console.log("t03 test case is running")


})
test('t04',{tag:'@smoke'},async({page})=>{

console.log("t04 test case is running")


})
test('t05',{tag:['@regression','@smoke']},async({page})=>{

console.log("t05 test case is running")

})