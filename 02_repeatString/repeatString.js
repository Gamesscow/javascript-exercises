const repeatString = function(word, value) {
    if (value < 0) return "ERROR";
    let wordString = "";
    for (let i = 0; i < value; i++) {
        wordString = wordString + word;
        
    }
    return wordString;
};

// Do not edit below this line
module.exports = repeatString;
