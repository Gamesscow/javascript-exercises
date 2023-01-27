const sumAll = function(val1, val2) {
    if (val1 < 0 || val2 < 0) return "ERROR";
    //Method 1 checking for each error
    //if (typeof val1 === 'string' || typeof val2 === 'string') return "ERROR";
    //if (typeof val1 === 'object' || typeof val2 === 'object') return "ERROR";
    
    //Mehtod 2 Check that the values are both integers
    if (!Number.isInteger(val1) || !Number.isInteger(val2)) return "ERROR";

    low = Math.min(val1,val2);
    high = Math.max(val1,val2);

    let sum = 0;
    for (let i = low; i <= high; i++){
        sum += i;  
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
