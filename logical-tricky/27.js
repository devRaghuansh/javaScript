function Car() {
    this.make = 'tata'
    return {make : 'Kia'}
}

const myCar = new Car()
console.log(myCar.make)