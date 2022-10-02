// Variadic curried sum function
const sum = (a) => {
    let total = a
    if (typeof a === 'undefined') return total
    return (b) => {
        total = total + b
        sum(b)
    }
}

console.log(sum(1)(3)())