/**
 * Get sum of all multiples of the multiple below the max
 * @param {Integer} multiple
 * @param {Integer} max
 * @returns {number}
 */
function sumSingleMultiples(max, multiple) {
    var numMultiples = Math.floor((max - 1)/multiple); //integer division
    //sum = n * (n+1)/2
    //multiply this by the multiple to get the sum
    return multiple * (numMultiples) * (numMultiples + 1)/2
}

console.log(sumSingleMultiples(1000, 3) + sumSingleMultiples(1000, 5) - sumSingleMultiples(1000, 15)); //avoid double-counting