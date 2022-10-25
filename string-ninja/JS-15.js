//String to be reversed with recurrsion 
let reverseStr = ''

function reverse(str, len) {
    if (len == str.length) {
        return;
    }
    reverse(str, len + 1);
    reverseStr = reverseStr + str[len]
}

let a = "js is best";

reverse(a, 0);
console.log(reverseStr)