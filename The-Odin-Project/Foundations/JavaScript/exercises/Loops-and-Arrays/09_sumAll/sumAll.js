const sumAll = function (minNum, maxNum) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "Error"
    if (min < 0 || max < 0) return "Error"
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }

    let sum = 0;
    for (let i = min; i <= max; ++i) {
        sum += i;
    }
};

// Do not edit below this line
module.exports = sumAll;
