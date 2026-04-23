// Variables in JavaScript can be declared using var, let, or const. Each has its own scope and behavior.
// 1. var: Variables declared with var are function-scoped and can be re-declared and updated. They are hoisted to the top of their scope, which means they can be used before they are declared (though this can lead to undefined behavior).
// 2. let: Variables declared with let are block-scoped and can be updated but not re-declared within the same scope. They are also hoisted, but not initialized, which means they cannot be used before they are declared.
// 3. const: Variables declared with const are block-scoped and cannot be updated or re-declared. They must be initialized at the time of declaration. Like let, they are hoisted but not initialized.
// Example of var
/*
var name1 = 'PriyankS';
var name1 = 'PriyankNew';   
Example of let
let name = 'PriyankSrivastava';
name = 'PriyankN';  
Example of const
const name2 = 'Priyank';
name2 = 'PriyankNew'; // This will throw an error because name2 is a constant 
*/


let name = 'PriyankSrivastava';
name = 'PriyankN';
name = 'PriyankNew';
name = 'PriyankNew2';
console.log('First Let - ',name);

var name1 = 'PriyankS';
var name1 = 'PriyankNew';
console.log('Second Var - ',name1);

const name2 = 'Priyank';
name2 = 'PriyankNew'; // This will throw an error because name2 is a constant
console.log('Third Const - ',name2); 



