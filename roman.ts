enum Romans {
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000
}

function romanToArabic(nums: string){
    const numsArr = nums.split('');
    const recursion = (arr: string[], index: number, sum: number) => {
        const current =  arr[index];
        const prev = arr[index + 1] || null;

        if(prev && Romans[current] < Romans[prev]){
            sum -= Number(Romans[current]);

        } else {
            sum += Romans[current];
        }
        if(index === 0) return sum;
        return recursion(arr, index - 1, sum);
    }

    return recursion(numsArr, numsArr.length - 1, 0);
};

function calculator(roman1: string, roman2: string) {
    return romanToArabic(roman1)+romanToArabic(roman2);
}

console.log(calculator('LXXX','V'));