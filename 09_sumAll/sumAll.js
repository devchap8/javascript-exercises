const sumAll = function(startNum, endNum) {

    if (startNum > endNum) {
        [startNum, endNum] = [endNum, startNum];
    }

    if (!(Number.isInteger(startNum) && Number.isInteger(endNum))
        || startNum < 0 || endNum < 0) {
        return "ERROR";
    }

    let sum = 0;

    for (let i=startNum; i<=endNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
