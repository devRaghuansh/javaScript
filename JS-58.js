// Use Promise.all 

let p1 = new Promise((resolve, reject) => {
    resolve('My p1 resolved')
})

let p2 = new Promise((resolve, reject) => {
    resolve('My p2 resolved')
})

let p3 = new Promise((resolve, reject) => {
    resolve('My p3 resolved')
})

Promise.all([p1, p2,p3]).then((values) => {
    console.log(values)
})


// for Promise.any it will resolve value for first fullfilled promise.