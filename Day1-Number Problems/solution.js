// Question List ===========>>>>>>>>

// 1. Print Numbers from 1 to N ============
// let n = 6;
// let result = 0;

// // Method 1: While Loop 
// while(result < 6){
//    result++;
//    console.log(result);
// }

// //Method 2: For Loop
// for(let i = 0; i < n; n++){
//     console.log(i);
// }

//2: Print Numbers from N to 1 ========
// let n = 5;
// for(let i = n; i >= 1; i--){
//     console.log(i)
// }

//3: Print All Even Numbers from 1 to N =======
// let n = 10;

// let evenNumbers = [];

// for(let i = 1; i <= n; i++){
//     if(i % 2 === 0){
//         evenNumbers.push(i);
//     }
// }

//Addtional Question: Write a solution for this problem in which the loops runs only n/2 times
// let n = 10;
// let evenNumbers = [];
// for (let i = 1; i <= (n / 2); i++) {
//     let even = 2 * i
//     evenNumbers.push(even);
// }

//4: Print sum of first natural numbers ------------
//Its take milliseconds - Procodrr Idea
// console.time()

// let n = 100000;
// let sumOfNaturalNumbers1 = (n * (n+1)) / 2;
// console.log(sumOfNaturalNumbers1)

// console.timeEnd();


//Its takes 7 seonds  - My solution 
// console.time()

// let n2 = 100000;
// let sumOfNaturalNumbers2 = 0;

// for(let i = 1; i <= n2; i++){
//     sumOfNaturalNumbers2 += i;
// }

// console.log(sumOfNaturalNumbers2);

// console.timeEnd();


//5: Print factorial of first N numbers ------------
// let n = 5;

// let factorialNumbers = 1;

// for(let i = 1; i <= n; i++){
//   factorialNumbers *= i;
// }

// console.log(factorialNumbers)


//6: Sum of All Even Numbers up to N
// let n = 10;

// let sumOfAllEvenNumbers = 0;

// for(let i = 1; i <= n; i++){
//    if(i % 2 == 0){
//     sumOfAllEvenNumbers += i;
//    }
// }

// console.log(sumOfAllEvenNumbers);


//7: Print Squares of Numbers from 1 to N
// let n = 5;

// let squareNumbers = [];

// for(let i = 1; i <= n; i++){
//   squareNumbers.push(i * i);
// }
 
// console.log(squareNumbers);


// Homework practice 
// 1. Print all numbers divisible by 3 and 5 up to N
// let n = 30; 

// let numberDivisibleByThreeAndFive = [];

// for(let i = 1; i <= n; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         numberDivisibleByThreeAndFive.push(i);
//     }
// }

// console.log(numberDivisibleByThreeAndFive);

// 2. Find the sum of all odd numbers up to N

// let n = 10;

// let sumOfAllOddNumbers = 0;

// for(let i = 1; i <= 10; i++){
//   if( i % 2 == 1){
//     sumOfAllOddNumbers += i;
//   }
// }

// console.log(sumOfAllOddNumbers);

// 3. Print the cubes of numbers from 1 to N
// let n = 5;

// let cubeNumbers = [];

// for(let i = 1; i <= n; i++){
//     cubeNumbers.push(i * i * i);
// }

// console.log(cubeNumbers);

// Print only the numbers that are both even and perfect squares
