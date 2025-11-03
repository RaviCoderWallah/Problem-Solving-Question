// 1. Find the Maximum of Three Numbers

// let maximumNum;

// const largerNum = (n1, n2, n3) => {
//    if(n1 >= n2 && n1 >= n3){
//     maximumNum = n1;
//    }else if(n2 >= n3 && n2 >= n1){
//     maximumNum = n2;
//    }else{
//     maximumNum = n3;
//    }
// }

// largerNum(6, 7, 7);

// console.log(maximumNum);



// 2. Check if a Number is Positive, Negative, or Zero

// let num = 0;

// if(num > 0){
//     console.log("Positive " + num)
// }else if(num < 0){
//     console.log("Negative " + num)
// }else{
//     console.log("Zero " + num);
// }


// 3. 
const calculateElectricBill = (units) => {
    let bill = 0;
    
    if (units <= 300) {
        let finalPositon = 300 - units;
       return  bill = (100 * 5) + (100 * 7) + (100 - finalPositon) * 10;
    }

    if (units <= 200) { //units = 130
        let finalPositon = 200 - units; //200 - 130 = 70
      return  bill = (100 * 5) + (100 - finalPositon) * 7;
    }

    if (units <= 100) {
      return  bill = units * 5
    }

    if(units > 300){ //units = 500;
       return bill = (100 * 5) + (100 * 7) + (100 * 10) + (units - 300) * 12;
    }
}


console.log(calculateElectricBill(250))


//4. Check if a character is a vowel or consonant 
const checkVowel = (char) => {
    if(!char) "Bhi char enter kara bhol gaye ho!"
    if(!isNaN(char)) return "Invalid character";
    if(typeof char !== "string") "Ye bhi nahi pata kya alaphabet kise kahate hai?" 

    let vowel = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < vowel.length; i++) {
        if (vowel[i] === char.toLowerCase()) {
            return "vowel"
        }else{
            return "consonant"
        }
    }
}

console.log(checkVowel("1"));

// 5: Check if a Year is a Leap Year
let year = 2024;

if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0){
    console.log("Leap Year " + year);
}else{
    console.log("Not leap Year " + year);
}


// Homework 

// 1. Check if a Character is Uppercase, Lowercase, Digit, or Special Character
let userInput = "S";

let convertToString = userInput.toString();

let charCode = convertToString.charCodeAt();

if (charCode >= 32 && charCode <= 47 || charCode >= 58 && charCode <= 64 || charCode >= 91 && charCode <= 96) {
    console.log("You type of special character.");
} else if (charCode >= 48 && charCode <= 57) {
    console.log("You type numbers between - 0 to 9");
} else if (charCode >= 65 && charCode <= 90) {
    console.log("You type captical letter.");
} else if (charCode >= 97 && charCode <= 122) {
    console.log("You Type of small letter.");
} else {
    console.log("You Type of special character.");
}

//2. Check Triangle Type Using Sides and Angles
function typeOFTriangle(a, b, c) {

  if (a > b && a > c) {

    if ((a * a) == (b * b) + (c * c)) {
      return "Right Angle Trianlge"
    }

  }

  if (b > a && b > c) {
    if ((b * b) == (a * a) + (c * c)) {
      return "Right Angle Triangle";
    }
  }

  if (c > a && c > b) {
    if ((c * c) == (a * a) + (b * b)) {
      return "Right Angle Triangle";
    }
  }

  if (a == b || b == c || c == a) {
    return "Isosceles Triangle";
  } else if (a == b == c) {
    return " Equilateral";
  } else {
    return "Scalene";
  }



}

console.log(typeOFTriangle(4, 5, 3));