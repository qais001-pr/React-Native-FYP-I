// Anonymous Functions
const add = function (a, b) {
    return a + b;
};

console.log(add(2, 3)); // Output: 5

// Call Back Functions
function sum(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}

function func(methodname, a, b) {
    return methodname(a, b);
}


const result = func(sum, 5, 3);
const result2 = func(substract, 5, 3);
console.log(result); // Output: 8
console.log(result2); // Output: 2


