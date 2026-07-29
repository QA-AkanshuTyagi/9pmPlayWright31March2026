// WAP to reverse the string:

let name = "Hello Test Of Playwright ";
let rev ="";

for (let i = name.length - 1; i >= 0; i--) {

    rev = rev + name[i]

}
console.log(rev)

let names = name.split(" ");

console.log(names)
rev = '';
for (let i = names.length - 1; i >= 0; i--) {
    if (names[i] !== '') {
        rev = rev + names[i] + ' ';
    }
}
console.log(rev.trim())
