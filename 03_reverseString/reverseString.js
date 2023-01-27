//Method 1 loop over full array and build new reversed string
// const reverseString = function(string) {
//     let newString = "";
//     let length = string.length;
//     for (let i = length -1 ; i >= 0 ; i--) {
//         newString += string[i];
//     }
//     return newString;
// };

//Method 2 use built in string operators to complate the task
const reverseString = function(string) {
    return string.split('').reverse().join('');
};


// Do not edit below this line
module.exports = reverseString;
