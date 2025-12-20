const fibonacci = function(index) {
    index = parseInt(index);
    if (index === 0) return 0;
    if (index === 1 || index === 2) return 1;
    if (index < 0) return "OOPS";
    let prevNum = 1;
	let currNum = 1;
	let sum = 0;
	for (let i = 3; i <= index; i++) {
		sum = prevNum + currNum;
		[prevNum, currNum] = [currNum, sum];
	}
	return sum;
};


// Do not edit below this line
module.exports = fibonacci;
