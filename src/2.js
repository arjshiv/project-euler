/**
 * Sum of all even Fobinacci numbers up to limit
 * @param {int} limit
 * @returns {int}
 */
function bruteForceFib(limit) {
    var f1 = 0;
    var f2 = 1;
    var f3 = 0;
    var sum = 0;

    while (sum < limit) {
        f3 = f2 + f1;
        f1 = f2;
        f2 = f3;

        if (f3 % 2 === 0) {
            sum += f3;
        }
    }

    return sum;
}

/**
 * Sum of all even Fibonacci numbers up to limit
 * Uses a slightly faster algorithm
 * @param {int} limit
 * @returns {int}
 */
function betterBruteForceFib(limit) {
    var f6 = 0;
    var f3 = 2;
    var fn = 2;
    var sum = 0;

    //every third number in the series is even
    while (sum < limit) {
        sum += fn;
        fn = 4*f3 + f6;
        f6 = f3;
        f3 = fn;
    }

    return sum;
}

console.log(bruteForceFib(4000000));
console.log(betterBruteForceFib(4000000));