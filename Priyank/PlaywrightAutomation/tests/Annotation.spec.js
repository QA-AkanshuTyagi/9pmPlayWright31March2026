/*

Annotation -- grouping wala bhi

--TC ko ----- skip, slow, fail,fix, only

--skip ------- intentionally and unintentionally

--intention
test.skip ('TC1', async({})=>{

    console.log('TC1 running')
})

--unintention
test('TC1', async({browserName})=>{

   if(browserName==="Edge"){
test.skip
}
})
 or
test('TC1', async({browserName})=>{

 test.skip(browserName==="Edge")
})




--Fail
--1st way
test.fail ('TC1', async({})=>{

    console.log('TC1 running')
})

-- 2nd way
test('TC1', async({browserName})=>{

   if(browserName==="Edge"){
test.fail
}
})


--Only tag -- single test case
--1st way
test.only ('TC1', async({})=>{

    console.log('TC1 running')
})

-- 2nd way
test('TC1', async({browserName})=>{

   if(browserName==="Edge"){
test.only
}
})



-- fixme -- currently is tc me kam kr rha hai to skip kr dega kyunki pura nhi hua h kam

test.fixme ('TC1', async({})=>{

    console.log('TC1 running')
})


-- slow -- koi tc Dheere Dheere run ho koi site ya page jo slow load hoti hai to timeout na deke slow use kr skte h
// slowtime = Default_time * 3

test.slow()
test ('TC1', async({})=>{

    console.log('TC1 running')
})

*/