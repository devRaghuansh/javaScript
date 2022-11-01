//Create a promise

let myPromise = new Promise((resolve, reject) => {
    let data = {
        name: 'check promise',
        data : {
            test : 'test data'
        }
    }
    let a  = 2 
    if(a === 3) {
        resolve(
            data
        )
    }else {
        reject('No data')
    }
})

myPromise.then((res) => {
 console.log('my data', res)
}).catch((res) => {
    console.log('mt data', res)
})

