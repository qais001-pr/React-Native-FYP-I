
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









// let addProd = { name: "Biscuits", Price: 40 }
// let p1 = { name: "Flour", Price: 100 }
// addToCart(cart, addProd, 22)
// addToCart(cart, p1, 2)
// let totalBill = calculateCartTotal(cart)




//listProuducts(products)
// let newProd = findProduct(products, "MotorCycle")
// console.log(newProd)



let orderList = []
let placeOrder = function (foodname, quantity = 1) {
    let myProd = findProduct(products, foodname);
    if (myProd != null) {
        orderList.push({
            name: myProd.name, price: myProd.price,
            pQuantity: quantity
        })
        console.log(quantity + ' ' + myProd.name + ' Added')
    }
}

let applyDiscount = () => {
    let sum = 0;
    for (const orderElement of orderList) {
        sum += orderElement.price * orderElement.pQuantity
    }
    //apply discount 10%
    discountprice = (sum * 10) / 100
    discount = sum - discountprice;
    orderList.push({ originalPrice: sum, DiscountPrice: discount })
}
//Call back function
function generateBill(callback) {
    console.log('Delivered Food')
    setTimeout(() => {
        callback()
    }, 3000);
}

function generate() {
    for (let orderElement of orderList) {
        if (orderElement.originalPrice) {
            console.log(`Original Price: ${orderElement.originalPrice}, \nDiscount Price: ${orderElement.DiscountPrice}`)
            continue;
        }
        console.log(`Name: ${orderElement.name}, Price: ${orderElement.price}, Quantity: ${orderElement.pQuantity}`)
    }
    console.log('---------------------')
    console.log()
    console.log('Thank you, Visit Again')
}
placeOrder("Rice", 2)
placeOrder("Sugar", 1)
placeOrder("Soap", 5)
placeOrder("Flour", 1)
applyDiscount()
generateBill(generate)
console.log('Total Bill:' + discount)