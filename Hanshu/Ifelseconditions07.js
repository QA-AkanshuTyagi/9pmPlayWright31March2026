let name= "akanshu";

// foreach loop is used to iterate over the elements is in array.

let arr = [1,2,3,4,5,6];
console.log(arr[0]);

for(let number of arr){

console.log(number);
}

let productNames = ["laptop", "mobile", "watch", "monitor"];

for (let product of productNames) {
	console.log(product);
}

// condition

let age = 20;
if(age>= 18){

console.log("you are eligiable for vote");

}else{

	console.log("you are not eligiable for vote");
}
// reverse prime no,

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 100; i >= 1; i--) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// find element


page.getByRole('button', { name: 'Submit' });


page.getByText('Welcome back');

page.getByLabel('Username');


page.getByPlaceholder('Enter your email');


page.getByAltText('Company logo');


page.getByTitle('Close dialog');


page.getByTestId('submit-btn');