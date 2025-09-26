function one(){
    console.log(1)
}
function two(){
    console.log(2)
}
function three(){
    console.log(3)
}
setTimeout(one,1000)
setTimeout(two,0)
three()