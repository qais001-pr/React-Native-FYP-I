function makefunctionarray() {
    const arr = [];
    for (let index = 0; index < 5; index++) {
        arr.push(function () {
            console.log(index)
        })
        console.log(arr)
        console.log(arr[index])
    }
    return arr
}


const newfunc = makefunctionarray()
newfunc[0]()
