//Class Question
//1. Find missing number form 1 to N (Sorted and Not Sorted Solutions)
//Input: [1,2,4,5]
//Output: 3
function missingNumber(arr) { 
    let missingvalue;
    for(let i = arr[0]; i < arr.length; i++){
        if(!arr.includes(i)){
          missingvalue = i;
          break;
        } 
    }
    return missingvalue ?? "No Missing Value";
}

// SirSoultions 
function SirMissingNumber(arr){
    const n = arr.length + 1;
    const exceptedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
    return exceptedSum - actualSum;

}

//2. Move All Zeros to End (Stable, 0(n))
//Input: [0, 1, 0, 3, 12]
//Ouput: [1, 3, 12, 0, 0]
function moveAllZerosToEnd(arr){
  let noZero = [];
  let zero = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == 0) 
        zero.push(arr[i]);
    else 
        noZero.push(arr[i]);
  }
  return [...noZero, ...zero]
}

//3. Find the First Repeating Element in an Array
// Input: [10, 5, 3, 4, 3, 5, 6]
// Output: 5
function firstRepeatingElement(arr){
  for(let el of arr){
    if(arr.indexOf(el) !== arr.lastIndexOf(el)){
      return el;
    }
  }
  return null;
}


