const repeatString = function(str, repeats) {
    if (repeats < 0) {
        return "ERROR";
    }
    let repeatedString = "";
    for (let i = 0; i<repeats; i++) {
        repeatedString += str;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;


