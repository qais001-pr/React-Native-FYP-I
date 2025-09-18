
var products = [{ name: "Rice", price: 200 },
{ name: "Flour", price: 100 },
{ name: "Soap", price: 120 },
{ name: "Sugar", price: 175 },
{ name: "Biscuits", price: 40 }]

var cart = []

function listProuducts(listProducts) {
    console.log('List of Products')
    for (let prd of listProducts) {
        console.log(`Nmae:${prd.name}\tPrice: ${prd.price}`)
    }
}
// new function findProducts
function findProduct(listProducts, prodName) {
    for (let prd of listProducts) {
        if (prd.name == prodName)
            return prd;
    }
    return null;
}
function addToCart(cart, product, quantity = 1) {
    let myProd = findProduct(products, product.name);
    if (myProd != null) {
        cart.push({
            name: myProd.name, price: myProd.price,
            pQuantity: quantity
        })
        console.log(quantity + ' ' + product.name + ' Added')
    }
}
function calculateCartTotal(cart) {
    let total = 0;
    for (let cartItem of cart) {
        total += cartItem.price * cartItem.pQuantity;
    }
    return total;
}









let addProd = { name: "Biscuits", Price: 40 }
let p1 = { name: "Flour", Price: 100 }
addToCart(cart, addProd, 22)
addToCart(cart, p1, 2)
let totalBill = calculateCartTotal(cart)




//listProuducts(products)
// let newProd = findProduct(products, "MotorCycle")
// console.log(newProd)



