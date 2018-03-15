module.exports = function count(s, pairs) {
  let arr = s.split('');

    let N = 1;
    for (let i = 0; i < pairs.length; i++) {
        N *= Math.pow(pairs[i][0], pairs[i][1]);
    }
    if (N > 100000000)
        return 0;

    function greatestCommonDivisor (a, b) {
        if (!b) {
            return a;
        }
        return greatestCommonDivisor(b, a % b);
    };

    let count = 0;
    for (let k = 0; k <= N; k++) {
        for (let j = 0; j < arr.length; j++) {

            if (((greatestCommonDivisor(k + j, N) === 1) && (arr[j] === '1')) || ((greatestCommonDivisor(k + j, N) !== 1) && (arr[j] === '0'))) {

                count++;

            }
        }
    }

    return count % 1000000007;
}
