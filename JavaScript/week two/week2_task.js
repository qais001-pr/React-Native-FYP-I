

// Task In Sir Talha Class



// var Stlists = [
//     { id: 1, name: 'Ali', regNo: '2020-Arid-4302', gender: 'male', cgpa: 0, color_group: '' },
//     { id: 2, name: 'Zeeshan', regNo: '2020-Arid-4301', gender: 'male', cgpa: 2.0, color_group: '' },
//     { id: 3, name: 'Hamza', regNo: '2020-Arid-4304', gender: 'male', cgpa: 3.0, color_group: '' },
//     { id: 4, name: 'Bilal', regNo: '2020-Arid-4334', gender: 'male', cgpa: 4.0, color_group: '' },
//     { id: 5, name: 'Umair', regNo: '2020-Arid-4300', gender: 'male', cgpa: 1.90, color_group: '' }
// ]

// function assignColor() {
//     for (let i = 0; i < Stlists.length; i++) {
//         if (Stlists[i].cgpa >= 3.5) {
//             Stlists[i].color_group = 'Green'
//         }
//         else if (Stlists[i].cgpa >= 3.0 && Stlists[i].cgpa <= 3.5) {
//             Stlists[i].color_group = 'Blue'
//         }
//         else {
//             Stlists[i].color_group = 'Red'
//         }
//     }
// }


// function showAccordingToColor() {
//     for (let i = 0; i < Stlists.length; i++) {
//         if (Stlists[i].color_group === 'Green') {
//             console.log('Those Student who have colour group are Green')
//             console.log(`${Stlists[i].regNo} \t ${Stlists[i].name} \t ${Stlists[i].cgpa.toFixed(2)} \t ${Stlists[i].color_group}`)
//         }
//     }
//     for (let i = 0; i < Stlists.length; i++) {
//         if (Stlists[i].color_group === 'Blue') {
//             console.log(`${Stlists[i].regNo} \t ${Stlists[i].name} \t ${Stlists[i].cgpa.toFixed(2)} \t ${Stlists[i].color_group}`)
//         }
//     }
//     for (let i = 0; i < Stlists.length; i++) {
//         if (Stlists[i].color_group === 'Red') {
//             console.log(`${Stlists[i].regNo} \t ${Stlists[i].name} \t ${Stlists[i].cgpa.toFixed(2)} \t ${Stlists[i].color_group}`)
//         }
//     }
// }

// let maleFiltered = []
// let femaleFiltered = []
// let k = 0;
// let j = 0;
// function filterArrByGender(male, female) {
//     for (let i = 0; i < Stlists.length; i++) {
//         if (Stlists[i].gender === male) {
//             maleFiltered[j] = Stlists[i]
//             j++
//         }
//         if (Stlists[i].gender === female) {
//             femaleFiltered[k] = Stlists[i]
//             k++
//         }
//     }
//     console.log(`\n\n ${'Male Filtered Array'} `)
//     for (let index = 0; index < maleFiltered.length; index++) {
//         if (maleFiltered.length > 0)
//             console.log(maleFiltered[index].name)
//     }
//     if (maleFiltered.length <= 0)
//         console.log('Male Filtered Arrays are Empty')

//     console.log(`\n\n ${'Female Filtered Array'} `)
//     for (let index = 0; index < maleFiltered.length; index++) {
//         if (femaleFiltered.length > 0)
//             console.log(femaleFiltered[index].name)
//     }
//     if (femaleFiltered.length <= 0)
//         console.log('Female Filtered Arrays are Empty')
// }


// assignColor()
// showAccordingToColor()
// filterArrByGender('male', 'female')


/// Course Work in Sir Nouman Class

// create an array of product which have name,price
var products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Tablet', price: 30000 },
    { id: 4, name: 'Monitor', price: 15000 },
    { id: 5, name: 'Keyboard', price: 2000 }
]
// List of all products
console.log('List of all products:')
for (const product of products) {
    console.log(`${product.id} \t ${product.name} \t ${product.price}`)
}

// Find Product by using name by using for loop
function findProductByName(name) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === name) {
            return products[i];
        }
    }
    return null;
}

// AddTOCart Array
var cart = []
//Add to cart function
function addToCart(cart, product, quantity = 1) {
    let found = findProductByName(product.name);
    if (found) {
        cart.push({ product: found, quantity });
        console.log(`${quantity} x ${product.name} added to cart`);
    } else {
        console.log('Product not found');
    }
}

// CAlculate Cart Total
function calculateCartTotal(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].product.price * cart[i].quantity;
    }
    return total;
}

// applyPromoCode function
function applyPromoCode(cartTotal, promoCode) {
    let discount = 0;
    if (promoCode === 'SAVE10') {
        discount = 0.1; // 10% discount
    }
    return cartTotal - (cartTotal * discount);
}

//  Generate Invoice and stored in list 

function generateInvoice(cart, finalAmount) {
    let INVOICE_LIST = '';
    console.log('\nInvoice:');
    console.log('-------------------------');
    for (const item of cart) {
        var st = `${item.product.name} (x${item.quantity}): ${item.product.price * item.quantity}`;
        INVOICE_LIST += st + '\n';
    }
    INVOICE_LIST += `Total: ${finalAmount}\n`;
    console.log('-------------------------');
    console.log(`Final Amount after discount: ${finalAmount}`);
    console.log('-------------------------');
    return INVOICE_LIST;
}

// Display Invoice
function displayInvoice(invoice) {
    console.log('\nDisplaying Invoice:');
    console.log(invoice);
}

// Example Usage
addToCart(cart, { name: 'Laptop' }, 1);
addToCart(cart, { name: 'Mobile' }, 2);
addToCart(cart, { name: 'Tablet' }, 1);
let cartTotal = calculateCartTotal(cart);
console.log(`Cart Total: ${cartTotal}`);
let finalAmount = applyPromoCode(cartTotal, 'SAVE10');
let invoice = generateInvoice(cart, finalAmount);
displayInvoice(invoice);
