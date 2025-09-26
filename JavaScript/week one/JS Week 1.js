// var Cities = ['Madina', 'Islamabad', 'Rawalpindi', 'Lahore']
// // // for (let i = 0; i < Cities.length; i++)
// // //     console.log(i + 1 + "\t- " + Cities[i])

// // let i = 0;
// // // while (i < Cities.length)
// // //     console.log(i + 1 + "\t-" + Cities[i++])




// // i = 0;
// // do {
// //     console.log(i + 1 + "\t-" + Cities[i++])
// // } while (i < Cities.length)







// // for (let c of Cities) {
// //     console.log(c)
// // }



// // for (let c in Cities) {
// //     console.log(Cities[c])
// // }




// // OBJECTS
// let person = { id: 101, name: 'Mustafa' }
// let persons = [{ id: 101, name: 'Ali', age: 43 },
// { id: 102, name: 'Usman', age: 55 },
// { id: 103, name: 'Umar', age: 23 }]
// let i = 0
// while (i < persons.length) {
//     if (persons[i].age < 50)
//         console.log(persons[i].name)
//     i++
// }



let i = 0
let product = [{ pid: 101, name: 'Snack', price: 100 },
{ pid: 102, name: 'Chocolate', price: 50 },
{ pid: 103, name: 'Drink', price: 250 },
{ pid: 104, name: 'Juice', price: 60 }]
let total = 0, highPrice = 0
for (p in product) {
    total += product[p].price
    if (product[p].price > highPrice)
        highPrice = product[p].price;
}
console.log(highPrice)








