const reverseString = function(str) {
    // Method 1
    // let reversedString = '';
    // for(let letter of str){
    //     reversedString = letter + reversedString;
    // }

    // return reversedString;
    
    // Method 2
    return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
