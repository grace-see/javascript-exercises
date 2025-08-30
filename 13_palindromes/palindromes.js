const palindromes = function (word) {
    word = word.replaceAll(".", "");
    word = word.replaceAll("?", "");
    word = word.replaceAll("!", "");
    word = word.replaceAll(", ", "");
    word = word.replaceAll(" ", "");
    console.log(word);
    for (let i = 0; i < word.length / 2; i++)
        if (word[i].toLowerCase() !== word[word.length - 1 - i].toLowerCase())
            return false;
    return true;
};

// Do not edit below this line
module.exports = palindromes;
