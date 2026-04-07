//hidden features - do a barrel roll - (search on google)

// Class Question 

// 1. Print Numbers from 1 to N using Recursion 
//handle both positive and negative values
function printNumbersToN(num) {
    let a = 0;
    function printNumbers() {
        if (num < 0) {
            a--;
            console.log(a);
            if (a > num) printNumbers();
        } else {
            a++;
            console.log(a);
            if (a < num) printNumbers();
        }
    }
    printNumbers();
}

// 2. Print Numbers from N to 1 Using Recursion
// Input: N = 5
// Output: 5 4 3 2 1 

//Only handle positive numbers 
function printNumberNtoOne(num) {
    function printNumbers() {
        console.log(num);
        num--;
        if (num > 0) printNumbers();
    }
    printNumbers();
}


// 3. Find Factorial of a Number Using Recursion
// Input: N = 5
// Output: 120
function findFactorial(num) {
    let factorial = num;
    function printFactorial() {
        if (num > 1) {
            factorial *= num - 1;
            num--;
            printFactorial();
        }
    }
    printFactorial();
    console.log(factorial)
}

// 4. Find the Sum of First N Natural Numbers Using Recursion
// Input: N = 4
// Output: 10

function sumOfNaturalNumbers(num) {
    let sum = 0;
    function printNumbers() {
        if (num > 0) {
            sum += num;
            num--;
            printNumbers();
        }
    }
    printNumbers();
    console.log(sum);
}

//5. Calculate Power Using Recursion
// Input: a = 2, n = 5
// Output: 32 (Compute aⁿ recursively.)

function calculatePower(a, n){
    let power = a; 
    function multiplyOwnself(){
        if(n > 1){ 
            power *= a;
            n--;
            multiplyOwnself();
        }
    }
    multiplyOwnself();
    console.log(power);
}