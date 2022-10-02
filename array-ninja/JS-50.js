//Create custom filter 
let arr = [1, 2, 3, 4, 5]
Array.prototype.customFilter = function (callback) {
    let newArry = []
    this.forEach(item => callback(item) && newArry.push(item))
    return newArry
}
console.log(arr.customFilter(item => item > 3))