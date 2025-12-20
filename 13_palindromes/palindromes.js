const palindromes = function (str) {
    //remove punctuation, spaces, capitals
    str = str.toLowerCase();
    deleteList = [" ", ",", "!", "?", "."];
    for (item of deleteList) {
        str = str.replaceAll(item, "");
    }
	backwardsStr = str.split("").reverse().join("");
	return (str === backwardsStr);
};

// Do not edit below this line
module.exports = palindromes;
