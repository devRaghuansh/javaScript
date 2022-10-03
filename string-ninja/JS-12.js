// Print duplicate characters from a string
let str = 'Tom is Tom'
const duplicateWordInString = (astr) =>{
    const strArray= astr.split(' ')
    let findDuplicates = strArray.filter((item, index) => strArray.indexOf(item) != index)
    console.log(findDuplicates)
}
duplicateWordInString(str)
//efficient way 