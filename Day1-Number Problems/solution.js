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

