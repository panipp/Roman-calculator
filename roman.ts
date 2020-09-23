enum Romans {
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000
}

function romanToArabic(roman: string) {
    const numsArr = roman.split('');
    const rec = (arr: string[], index: number, sum: number) => {
        const current = arr[index];
        const prev = arr[index + 1] || null;

        if (prev && Romans[current] < Romans[prev]) {
            sum -= Number(Romans[current]);
        } else {
            sum += Romans[current];
        }

        if (index === 0) return sum;
        return rec(arr, index - 1, sum);
    }
    return rec(numsArr, numsArr.length - 1, 0);
}