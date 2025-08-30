const findTheOldest = function(people) {
    let oldest = people[0];
    let maxAge = (oldest.yearOfDeath === undefined) ? (new Date().getFullYear()) - oldest.yearOfBirth : oldest.yearOfDeath - oldest.yearOfBirth;
    for (let i = 1; i < people.length; i++) {
        let age = (people[i].yearOfDeath === undefined) ? (new Date().getFullYear()) - people[i].yearOfBirth : people[i].yearOfDeath - people[i].yearOfBirth;
        if (age > maxAge) {
            oldest = people[i];
            maxAge = oldest.age;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
