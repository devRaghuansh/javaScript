const pearson  = {name: 'ram'}

function sayHi(age){
    return `${this.name} is ${age}`
}

console.log(sayHi.apply(pearson, [21]))
console.log(sayHi.bind(pearson, 23))