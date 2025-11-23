//class question 

// 1. Print All Factors of a Number
// Input: N = 24
// Output: [1, 2, 3, 4, 6, 8, 12, 24]

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

// 2. Print All Multiples of a Number up to N
// Input: Number = 4, Limit = 30
// Output: [4, 8, 12, 16, 20, 24, 28]

function allMultiplesOfNumber(num, limit) {
   let multiples = [];
   let loopCount = Math.floor(limit / num);
   for (let i = 1; i <= loopCount; i++) {
      multiples.push(num * i);
   }
   return multiples;
}


// 3. HCF = [36, 9]
function getHCF(a, b) {
   let aFactor = allFactorsOfNumber(a);
   for (let i = aFactor.length; i >= 1; i--) {
      if (b % aFactor[i] === 0) return aFactor[i]
   }
}

//This funtion is not work for 15, 17
function getLCM(a, b){
  let HCF = getHCF(a, b);
  let LCM = (a * b) / HCF;
  return LCM;
}