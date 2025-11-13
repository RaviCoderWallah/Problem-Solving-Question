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
// 1. Find the Sum of Digits
// Input: N = 987
// Output: 24

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

// 2. Find the Average of Digits
// Input: N = 4567
// Output: Average = 5.5

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


// 3. Find the Largest and Smallest Digit in a Number
// Input: N = 9483
// Output: Largest = 9, Smallest = 3

// 4. Check if a Number is a Strong Number
// Input: N = 145
// Output: Strong Number

function isStrongNumber(num) {
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

    let sumOfFactorial = 0;

    digits.forEach((elem) => {
        let factorial = 1; //2
        for (let i = 1; i <= elem; i++) {
            factorial = factorial * i; //2
        }
        sumOfFactorial += factorial;
    });

    if (num === sumOfFactorial) {
        return true;
    } else {
        return false;
    }
}


// 5. Check if a Number is an Automorphic Number
// Input: N = 25
// Output: Automorphic Number (since 25² = 625 ends with 25)

function isAutomorphicNumber(num) {
    let numSquare = num ** 2;
    let digits = [];
    let numString = numSquare + "";
    let count = 0;
    let copyOfNum = numSquare;
    while (count < numString.length) {
        count++;
        let digitFinal;
        digitFinal = copyOfNum % 10
        digits.push(digitFinal);
        copyOfNum = Math.floor(copyOfNum / 10)
    }

    let getLastTwoDigits = [];
    for (let i = 0; i < (num + "").length; i++) {
        getLastTwoDigits.push(digits[i]);
    }

    getLastTwoDigits = getLastTwoDigits.reverse();


    let sum = 0;
    for (let i = 0; i < getLastTwoDigits.length; i++) {
        sum += digits[i] * (10 ** i)
    }

    if (sum == num) {
        return true;
    } else {
        return false;
    }

}


// 6. Find the Frequency of Each Digit
// Input: N = 112233
// Output: 1 → 2, 2 → 2, 3 → 2


// 7. Check if a Number is a Harshad Number
// Input: N = 18
// Output: Harshad Number (since 18 is divisible by 1 + 8 = 9)
function isHarshadNumber(num) {
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

    let sum = 0;
    for(let i = 0; i < digits.length; i++){
        sum += digits[i]
    }

    if(num % sum === 0){
        return true;
    }else{
        return false;
    }
}
