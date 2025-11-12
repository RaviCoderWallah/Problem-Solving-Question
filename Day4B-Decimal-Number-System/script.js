// 6. Check if a Number is a Palindrome
// Check if a Number is a Palindrome
// Input: N = 121
// Output: Palindrome

function isPalindrome(num) {
    let digits = [];
    let numString = num + "";
    let count = 0;

    let copyOfNum = num;

    while (count < numString.length) {

        count++;
        let digitFinal;

        digitFinal = copyOfNum % 10

        digits.push(digitFinal);

        copyOfNum = Math.floor(copyOfNum / 10)

    }

    digits = digits.reverse();

    let reverseNum = 0;

    for (let i = 0; i < digits.length; i++) {
        reverseNum += digits[i] * (10 ** i)
    }

    if (num === reverseNum) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}

function isArmstrongNumber(num) {
    let digits = [];
    let numString = num + "";
    let count = 0;

    let copyOfNum = num;

    while (count < numString.length) {

        count++;
        let digitFinal;

        digitFinal = copyOfNum % 10

        digits.push(digitFinal);

        copyOfNum = Math.floor(copyOfNum / 10)
    }

    let square = 0;

    digits.forEach((elem) => {
        square += elem ** numString.length
    });

    if (square === num) {
        return "true"
    } else {
        return "false"
    }
}


// Homework Question 

function sumOfDigits(num) {
    let digits = [];
    let numString = num + "";
    let count = 0;

    let copyOfNum = num;

    while (count < numString.length) {

        count++;
        let digitFinal;

        digitFinal = copyOfNum % 10

        digits.push(digitFinal);

        copyOfNum = Math.floor(copyOfNum / 10)
    }

    let sumOfDigits = 0;

    digits.forEach(element => {
        sumOfDigits += element;
    });

    return sumOfDigits;
}

function averageOfDigits(num) {
    let digits = [];
    let numString = num + "";
    let count = 0;

    let copyOfNum = num;
    while (count < numString.length) {
        count++;
        let digitFinal;
        digitFinal = copyOfNum % 10
        digits.push(digitFinal);
        copyOfNum = Math.floor(copyOfNum / 10)
    }

    let sumOfDigits = 0;
    digits.forEach(element => {
        sumOfDigits += element;
    });

    return (sumOfDigits / numString.length).toFixed(2);
}

