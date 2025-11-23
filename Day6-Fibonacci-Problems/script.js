function hasPrimeNumber(num) {
   let factors = [];
   for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
         factors.push(i);
      }
   }
   factors.map((el) => {
      el = num / el;
      if (num / el !== el) factors.push(el)
   });

   return (factors.length == 2)
}


//wrong logic
function allFactorsOfNumber(num) {

   let factors = [];

   for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
         factors.push(i);
      }
   }
   factors.map((el) => {
      el = num / el;
      if (num / el !== el) factors.push(el)
   });

   return factors.toSorted((a, b) => a - b);
}

// function hasCoPrimeNumber(a, b) {
//    let aFactor = allFactorsOfNumber(a);
//    for (let i = aFactor.length; i >= 1; i--) {
//       if (b % aFactor[i] === 0)
//          return aFactor[i] === 1;
//    }
// }

function printFibonacciSeries(num) {
   let series = [0, 1];
   for (let i = (num - series.length - 1); i >= 0; i--) {
      series.push(series[series.length - 1] + series[series.length - 2])
   }
   return series;
}

function printNthFibonacciNumber(num) {
   let series = [0, 1];
   for (let i = (num - series.length - 1); i >= 0; i--) {
      series.push(series[series.length - 1] + series[series.length - 2])
   }
   return series[num - 1];
}

function hasFibonacciSeriesNumber(num) {
   let series = [0, 1];
   while (series[series.length - 1] < num) {
      series.push(series[series.length - 1] + series[series.length - 2])
   }
   return (series.includes(num))
}

//Homework 

// 1, Print All Prime Numbers up to N
function printAllPrimeNumbers(num) {
   let primeNumbers = [];
   for (let i = 0; i < num; i++) {
      let prime = hasPrimeNumber(i);
      if (prime) {
         primeNumbers.push(i);
      }
   }
   return primeNumbers;
}

//2, Print Sum Of All Prime Numbers Up to N
function sumOFAllPrimeNumbers(num) {
   let primeNumbers = printAllPrimeNumbers(num);
   let sum = 0;
   for (let i = 0; i < primeNumbers.length; i++) {
      sum += primeNumbers[i]
   }
   return sum;
}

//3. Check if Two Numbers are Twin Primes
function hasTwinPrimes(a, b) {

   let checkAPrimeNum = hasPrimeNumber(a);
   let checkBPrimeNum = hasPrimeNumber(b);

   if (checkAPrimeNum && checkBPrimeNum) {
      let difference = (a - b);
      if (difference < 0) difference = difference * -1;
      if (difference == 2) return true;
   } else {
      return false;
   }
}

//4. Print All Fibonacci Numbers up to a Given Limit
function printFibonacciSeriesUpToLimit(limit) {
   let series = [0, 1];
   while (series[series.length - 1] < limit) {
      series.push(series[series.length - 1] + series[series.length - 2])
   }
   series.pop();
   return series;
}

//5. Generate Fibonacci Numbers within the Range 
function fibonacciNumbersWithinRange(a, b) {
   let largestNum = 0;
   let smallestNum = 0;

   if (a > b) {
      largestNum = a;
      smallestNum = b;
   } else {
      largestNum = b;
      smallestNum = a;
   }

   let largestNumFibonacciSeries = printFibonacciSeriesUpToLimit(largestNum);
   let filter = largestNumFibonacciSeries.filter((item) => item > smallestNum);
   return filter;
}

//6. Find the Sum of Even Fibonacci Numbers up to N Terms
function sumOfEvenFibonacciNumbers(num) {
   let sum = 0;
   let fibonacciNum = printFibonacciSeries(num);
   let evenFibonacciNum = fibonacciNum.filter((item) => item % 2 == 0);
   evenFibonacciNum.forEach((item) => sum += item);
   return sum;
}

//7.Check if the Sum of Two Consecutive Fibonacci Numbers is Prime
// Input: (5 + 8)
// Output: 13 is Prime
function hasTwoConsecutiveFibonacciPrime(a, b) {
   let sumOfTwoNumbers = a + b;
   let isPrime = hasPrimeNumber(sumOfTwoNumbers);
   if (!isPrime) return `${sumOfTwoNumbers} is not Prime`;
   let largestVal;

   (a > b) ? largestVal = a : largestVal = b;

   let printFibonacciSeriesToLargestValue = printFibonacciSeriesUpToLimit(largestVal);
   let lastIndex = printFibonacciSeriesToLargestValue[printFibonacciSeriesToLargestValue.length - 1];
   let sumOFTwoLastIndex = printFibonacciSeriesToLargestValue[printFibonacciSeriesToLargestValue.length - 2] + lastIndex;

   if (sumOFTwoLastIndex === largestVal) {
      return `${sumOfTwoNumbers} is Prime`;
   }
}

// 8. Print First N Prime Fibonacci Numbers
// Input: N = 5
// Output: 2, 3, 5, 13, 89
function printFirstNPrimeFibonacciNumbers(num) {
   
}

console.log(printFirstNPrimeFibonacciNumbers(5));
