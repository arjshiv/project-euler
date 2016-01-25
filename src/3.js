/**
 * Get the largets prime factor of a number
 * @param {int} num
 * @returns {int}
 */
function largestPrimeFactor(num) {
    if (num % 2 === 0) {
        return 2;
    }
    var nextPrime = 3;
    while(num > nextPrime) {
        if (num % nextPrime === 0) {
            num = num/nextPrime;
        }
        nextPrime += 1;
    }
    return nextPrime;
}

console.log(largestPrimeFactor(600851475143));