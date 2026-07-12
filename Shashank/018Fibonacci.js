// Fibonacci series up to n terms
let n = 8;
let a = 0, b = 1, nextTerm;

console.log(a);
console.log(b);

for(let i = 2; i < n; i++)
{
    nextTerm = a + b;
    console.log(nextTerm);
    a = b;
    b = nextTerm;
}

