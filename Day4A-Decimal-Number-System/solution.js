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

let num = 1234567890;

function splitNumberIntoDigits(num) {
    let digitsArr = []; 

    let calculateNumLength = "" + num;

    let calculateFinalPositon; 

    for (let i = calculateNumLength.length; i >= 0; i--) {

        calculateFinalPositon = num / 10 ** i; 

        let integerPart = calculateFinalPositon - (calculateFinalPositon % 1);

        num = num - (integerPart * 10 ** i); 

        digitsArr.push(integerPart);
    }

    digitsArr.shift();

    return digitsArr;
}

splitNumberIntoDigits(num);


// 2. Remove the Decimal Point Mathematically
// Input: N = 12.34
// Output: 1234

function removeDecimalPoint(decimalPointNumbers){
   while(decimalPointNumbers % 2 !== 0){
      decimalPointNumbers = decimalPointNumbers * 10;
   }
   return decimalPointNumbers;
}

removeDecimalPoint( 12.346780)

// 3. Separate Whole and Fractional Parts of a Number
// Input: N = 5.75
// Output: Whole = 5, Fraction = 0.75

function separateWholeAndFractionalPart(decimalPointNumbers){
  let wholePart = decimalPointNumbers - (decimalPointNumbers % 1);
  let fractionalPart = decimalPointNumbers - wholePart;
  return [wholePart, fractionalPart];
}

console.log(separateWholeAndFractionalPart(3.45));

// 4. Count Whole and Fractional Digits Separately
// Input: N = 12.345
// Output: Whole Count = 2, Fraction Count = 3
function countWholeAndFractionalDigits(decimalPointNumbers){
  let wholePart = decimalPointNumbers - (decimalPointNumbers % 1);
  let fractionalPart = decimalPointNumbers - wholePart;

  let stringNum = (decimalPointNumbers + "").length - 1;
  let countWholePart = (wholePart + "").length;
  let countFractionalPart = stringNum - countWholePart;

  return [countWholePart, countFractionalPart];
}

console.log(countWholeAndFractionalDigits(12.4578));

// Generate a Decimal Number from Whole and Fractional Digits
// Input: Whole = [1, 2], Fraction = [3, 4]
// Output: 12.34

let whole = [1, 2, 3, 4];
let fraction = [3, 4, 5, 6];

function generateDecimalNumbers(whole, fraction) {
    let wholePart = 0;
    let fractionPart = 0;
    let wholePartCount = whole.length; 
    let fractionPartCount = fraction.length;

    for (let i = 0; i < whole.length; i++) {
        wholePart += whole[i] * (10 ** (wholePartCount - i - 1));
    }


    for (let i = 0; i < fraction.length; i++) {
       fractionPart += (fraction[i] * (10 ** (fractionPartCount - i - 1)));
    }

    let finalFractionPart = fractionPart / 10 ** fraction.length;
    let decimalPointNumbers = wholePart + finalFractionPart;


    return decimalPointNumbers;
}

console.log(generateDecimalNumbers(whole, fraction));
