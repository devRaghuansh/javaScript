// // String be reversed using recursion

const reverseString = (str) => {
   //that is possible because of closure 
   let newStr = ''
    if(str.length === 1) {
        return newStr
    }else {
        newStr = newStr + str[str.length -1]
        console.log("newstr",newStr)
        return reverseString(str.substring(0, str.length -1))
    }
}
console.log(reverseString('abc'))

