// During Video : Convet one number and then reverse

let numArr = [3, 5, 6, 8, 1, 5, 6, 7, 9];

function digitToNumber(digits) {
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
       sum += digits[i] * (10 ** i)
    }
    return sum;
}

const reverse = digitToNumber(numArr);
console.log(reverse);


//Homework: 

//1. Split Number into Digits
//Input = 12345;
//Output = [1, 2, 3, 4, 5];


// console.log(splitNumberIntoDigits(num))
// 12345 / 10 ** 4 = 1;
num = num - (1 * 10 ** 4);

//2345 / 10 ** 3 = 2;
num = num - (2 * 10 ** 3);

//345 / 10 ** 2 = 3
num = num - (3 * 10 ** 2);

//45 / 10 ** 1 = 4
num = num - (4 * 10 ** 1)

// 5 / 10 ** 0 = 5
num = num - (5 * 10 ** 0)