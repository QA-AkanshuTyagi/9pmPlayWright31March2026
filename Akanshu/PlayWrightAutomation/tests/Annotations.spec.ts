import {test} from '@playwright/test';

test.describe('Skipping TheTestcase',{tag: '@LoginPage'},()=>{

test.skip('testcase01Login',async({page})=>{


console.log("testcase01Login is running")



})

test('testcase02Login',async({page,browserName})=>{
if(browserName==='chromium'){

test.skip();

}

console.log("testcase02Login is running")


    
})
test('testcase03Login',async({page})=>{




console.log("testcase03Login is running")
    
})
test('testcase04Login',async({page,browserName})=>{
test.skip(browserName==='chromium','testcase04Login is skipped for chromium browser');

console.log("testcase02Login is running")


    
})

}) 
//==================================================================================================
test.describe('only tag Testcase',{tag: '@homePage'},()=>{

test.only('testcase04Login',async({page})=>{


console.log("testcase04Login is running")



})

test('testcase05Login',async({page})=>{


console.log("testcase05Login is running")


    
})
test('testcase06Login',async({page,browserName})=>{




console.log("testcase06Login is running")
    
})

}) 

//================================================================================================

test.describe('Failing the Testcase',{tag: '@homePage'},()=>{

test.fail('testcase04Login',async({page})=>{


console.log("testcase04Login is running")



})

test('testcase05Login',async({page})=>{


console.log("testcase05Login is running")


    
})
test('testcase06Login',async({page,browserName})=>{

if(browserName==='chromium'){
test.fail();

}


console.log("testcase06Login is running")
    
})

}) 
//================================================================================================



test.describe('fixme the Testcase',{tag: '@homePage'},()=>{

test.fixme('testcase04Login',async({page})=>{


console.log("testcase04Login is running")



})

test('testcase05Login',async({page})=>{


console.log("testcase05Login is running")


    
})
test('testcase06Login',async({page,browserName})=>{




console.log("testcase06Login is running")
    
})

}) 

//================================================================================================

test.describe('slow the Testcase',{tag: '@homePage'},()=>{
test.slow();
test('testcase04Login',async({page})=>{


console.log("testcase04Login is running")



})

test('testcase05Login',async({page})=>{


console.log("testcase05Login is running")


    
})
test('testcase06Login',async({page,browserName})=>{




console.log("testcase06Login is running")
    
})

}) 