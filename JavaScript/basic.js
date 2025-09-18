// Variable 
// var,let,const
var map = 100;
var map = 10;
var map = 'Pakistan'
console.log(map);
// Var are used to declare a variable 
// when we used same name of multiple variable 
// it allows to declare a variable with the same name 
// and also to modify it 
let letmap = 'Pak';
// let letmap = 'Pakmap';
console.log(typeof (letmap)); // string
letmap = 123
console.log(letmap) // 123
console.log(typeof (letmap)); // number
// let are used to declare a variable 
// it does not allows to declare a variable with the same name 
// and allow to modify it ot overwrite it 


let xy;
console.log(xy); // logs "undefined"





//Arithematic Operation
v1 = 10, v2 = 10
console.log('Sum of V1 and V2 = ' + v1 + v2)
// Sum of V1 and V2 = 1010
console.log('Sum of V1 and V2 = ' + (v1 + v2))
// Sum of V1 and V2 = 20
console.log('Difference of V1 and V2 = ' + v1 - v2)
// Nan 
console.log('Multiplication of V1 and V2 = ' + v1 * v2);
// Multiplication of V1 and V2 = 100
console.log('V1 ^ V2 = ' + v1 ** v2);
// V1 ^ V2 = 10000000000


// Conditional Statement / Logic 

// Ternary Operator
let x = 10, y = 9;
z = (x < y) ? "X is grater than Y" : (y < x)
    ? 'Y is less than X' : 'Y is greater than X';
console.log(z)

// if else
if (x < y) console.log('X is greater than Y')
else if (y < x) console.log('Y is less than X')
else console.log('Y is greater than X')

// for loop 
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// For in

let products = [{ id: 1, name: 'Product 1', price: 1000 },
{ id: 2, name: 'Product 2', price: 2000 },
{ id: 3, name: 'Product 3', price: 3000 },
{ id: 3, name: 'Product 3', price: 6000 }];
let total = 0, hihgest = 0;
for (let product in products) {
    total += products[product].price
    if (products[product].price > hihgest) {
        hihgest = products[product].price;
    }
}
console.log(`Total Price is ${total} and Highest Price is ${hihgest}`);
let i = 0;
do {
    i++;
} while (i < 100)

// Functions
function myName() {
    console.log('My Name is Muhammad Qais');
}
myName(); // Calling the function



// Function with parameters
function myNameWithParams(name) {
    console.log(`My Name is ${name}`);
}




myNameWithParams('Muhammad Qais');
myNameWithParams('Ali');
myNameWithParams('Ahmed');

let Cities = [{ id: 1, name: 'Karachi', country: 'Pakistan' },
{ id: 2, name: 'Lahore', country: 'Pakistan' },
{ id: 3, name: 'Islamabad', country: 'Pakistan' },
{ id: 4, name: 'Peshawar', country: 'Pakistan' }];
for (const element of Object.entries(Cities)) {
    console.log(element[1].name + ' is in ' + element[1].country);
}   