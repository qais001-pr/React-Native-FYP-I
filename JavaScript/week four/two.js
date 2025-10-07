function makefunctionarray() {
    const arr = [];
    for (let index = 0; index < 5; index++) {
        arr.push(function () {
            console.log(index)
        })
        // console.log(arr)
        // console.log(arr[index])
    }
    return arr
}


const newfunc = makefunctionarray()
newfunc[2]()
// This will log 5 because the loop has completed and index is now 5
// To fix this, we can use an IIFE (Immediately Invoked Function Expression) to capture the current value of index



function newfunc1() {
    const arr = [];
    for (var index = 0; index < 5; index++) {
        arr.push((function (index) {
            return function () {
                console.log(index)
            }
        })(index))
    }
    return arr
}
const newfunc2 = newfunc1()
newfunc2[2]()
