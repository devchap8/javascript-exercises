const removeFromArray = function(arr, ...removals) {
    for (removal of removals) {
        let filteredArr = arr.filter(item => item !== removal)
        arr = filteredArr;
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
