// // CALL BACK FUNCTIONS
// // anonymous
let greetings = function () {
    console.log('Welcome Dear Students')
}
greetings = function () { console.log('Allah Hafiz') }
greetings();
// // let add = function (a, b) { console.log('Sume = ' + (a + b)) }
// // let v1 = 55;
// // add(v1, 66);
// // function Greetings1() {
// //     console.log('Welcome Dear')
// // }
// // function greetings2() { console.log('Allah nay Hawalay') }
// // function NameGreeting(cb, name) {
// //     console.log('Mr. ' + name);
// //     cb();
// // }
// // NameGreeting(Greetings1, 'Sameer')
// // NameGreeting(greetings2, 'Sameer')

// // setTimeout(function () { console.log('Juma Mubarak') }, 5000);

// // function fetchData() {
// //     console.log('Fetching Data from server ... ');
// //     return "Server Data";
// // }
// // function processData() {
// //     let data = fetchData();
// //     console.log('Processing: ' + data)
// // }

// // function firstTask() {
// //     console.log('First Task Started:');
// //     setTimeout(function () { console.log('First Task Finished') }, 3000);
// // }
// // function secondTask() { console.log('Second Task Executed After First') }
// // firstTask();
// // secondTask();

// // function firstTask(callback) {
// //     console.log('First Task Started...');
// //     setTimeout(function () {
// //         console.log('First Task Finished');
// //         callback();
// //     }, 3000);
// // }
// // function secondTask() { console.log('Second Task executed After First') }
// // firstTask(secondTask)

// // ARROW FUNCTIONS
// // let namePrint = () => { console.log('AOA Umer') }
// // namePrint();
// let square = (val) => { console.log('Square = ' + (val * val)) }
// let squareNew = (val) => console.log('Square = ' + (val * val));
// let square2 = val => console.log('Square ' + (val * val))
// //square(5)
// //squareNew(55)
// //square2(44)

// // let add = (v1, v2) => v1 + v2;
// // let ans = add(4, 4)
// // console.log('Sum = ' + ans)

// // forEach, map, filter
// // all works with arrays/lists

function checkCGPA() {
    let age = 44; var CGPA = 3.4;
    if (CGPA < 4.0) {
        var newCGPA = CGPA + 1.0;
        console.log('Congrats for 2 Numbri: New CGPA = ' + newCGPA)
    }
    console.log('Updaed Latest CGPA = ' + newCGPA)
}

checkCGPA();
console.log('Function kay Baad CGPA = ' + newCGPA)