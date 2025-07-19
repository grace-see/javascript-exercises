const reverseString = function(string) {
    let characters = string.split("");
    for (let i = 0; i < characters.length / 2; i++) {
        let temp = characters[i];
        characters[i] = characters[characters.length - 1 - i];
        characters[characters.length - 1 - i] = temp;
    }
    return characters.join("");
};

// Do not edit below this line
module.exports = reverseString;
