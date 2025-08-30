const fibonacci = function(num) {
    if (num < 0)
        return "OOPS";
    let first = 1;
    let second = 1;
    let third = 0;
    if (num == 1)
        return first;
    if (num == 2)
        return second;
    for (let i = 2; i < num; i++) {
        third = first + second;
        first = second;
        second = third;
    }
    return third;
};

// Do not edit below this line
module.exports = fibonacci;
