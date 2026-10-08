/*
----------------------
Command -----
Execute all test cases present under tests folder - 
-- npx playwright test

Execute all test cases present in particular tests file - 
-- npx playwright test .\Amazon.spec.js


----------
Grouping ---------

----1st WAY 

'TC 1 @sanity'
'TC 2 @regression'
'TC 3 @smoke'
'Tc 4 @smoke'

----- run all where these tag present under tests folder
if we want to execute smoke/sanity/regression

-- npx playwright test --grep "@smoke"
-- npx playwright test --grep "@sanity"
(Any tag name) @tagname

------ run all where these tag  present under particular files

-- npx playwright test .\Amazon.spec.js --grep "@smoke"
-- npx playwright test .\Amazon.spec.js --grep "@login"
-- npx playwright test .\Amazon.spec.js --grep "@upload"


------ run through test case name tag is not categorizzed 

-- npx playwright test .\Amazon.spec.js --grep "TC01"
-- npx playwright test --grep "TC01"


-----------------------------------------

--2nd Way
Using Tag name

'TC 1', {tag:'@sanity'}
'TC 2', {tag:['@regression','@sanity']}
'TC 3', {tag:'@smoke'}
'Tc 4', {tag:'@smoke'}


---------------------------------------------------

-- test Suite ----------- under test suite multiple test case we can add
test.describe('',()=>{

test ('TC 1',async({})=>{
    
    })    
test ('TC 2',async({})=>{
    
    })
test ('TC 3',async({})=>{
    
    })    

    })

tag --------------
test.describe('Login',{tag:'@smoke'},()=>{

test ('TC 1',async({})=>{
    
    })    
test ('TC 2',async({})=>{
    
    })
test ('TC 3',async({})=>{
    
    })    

    })

test.describe('Login',{tag:'@sanity'},()=>{

test ('TC 4',async({})=>{
    
    })    
test ('TC 5',async({})=>{
    
    })
test ('TC 6',async({})=>{
    
    })    

    })

command ------- npx playwright test .\Amazon.spec.js --grep "@smoke"


--------- if need to execute multiple tag

npx playwright test .\Amazon.spec.js --grep "@smoke|@sanity"

*/



// Grouping of Test cases

import {test} from '@playwright/test'

//// test suite ?? -- test suite me multiple tc likhe hote hai
// test.describe


test.describe('Test Suite 1', ()=>{

    test ('TC1',{tag:['@smoke','@abc','@sanity']}, async({})=>{

    console.log('TC1 running')
})


test ('TC2',{tag:'@smoke'}, async({})=>{

    console.log('TC2 running')
})


test ('TC3',{tag:'@sanity'}, async({})=>{

    console.log('TC3 running')
})


test ('TC4',{tag:'@abc'}, async({})=>{

    console.log('TC4 running')
})


test ('TC5',{tag:'@abc'}, async({})=>{

    console.log('TC5 running')
})


test ('TC6@sanity', async({})=>{

    console.log('TC6 running')
})

})

test.describe('Test Suite 2', ()=>{

    test ('TC1',{tag:['@smoke','@abc','@sanity']}, async({})=>{

    console.log('TC1 running')
})


test ('TC2',{tag:'@smoke'}, async({})=>{

    console.log('TC2 running')
})


})

