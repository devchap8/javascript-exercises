const findTheOldest = function(arr) {
	return arr.reduce(compareOlder)
};

function compareOlder(oldest, person) {
    const today = new Date();
    const thisYear = today.getFullYear();
	return ((oldest.yearOfDeath ? oldest.yearOfDeath : thisYear) - oldest.yearOfBirth 
    > (person.yearOfDeath ? person.yearOfDeath : thisYear) - person.yearOfBirth) 
    ? oldest : person;
}



// Do not edit below this line
module.exports = findTheOldest;
