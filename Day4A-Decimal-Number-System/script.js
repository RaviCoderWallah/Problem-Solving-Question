let num = 12345;

function splitNumberIntoDigits(num) {
    let digitsArr = []; // []

    let calculateFinalPositon; //undefined

    for (let i = 4; i >= 0; i--) {

        calculateFinalPositon = num / 10 ** i; // 12345 / 10 ** 4 = 1.2345

        num = num - (calculateFinalPositon * 10 ** i); // 12345 - (1.2345 * 10 ** 4)

        digitsArr.push(num);
    }

    return digitsArr;
}

console.log(splitNumberIntoDigits(num));

/* 

6 = 2 * X + 0
6 - 0 = 2 * X
(6 - 0) / 2 = X



*/





