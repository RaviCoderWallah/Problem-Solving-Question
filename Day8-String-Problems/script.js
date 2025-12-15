function reverseString(str) {
    let stringSplit = str.split("");
    let reverseStr = [];
    for (let i = 0; i < stringSplit.length; i++) {
        reverseStr.unshift(stringSplit[i]);
    }
    return reverseStr.join("");
}

//Using Common Methods - loop required --> str.length
function isPalidromString(str) {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return (str === reverseStr);
}

//Using Two-Pointer Methods - Loop required  --> str.length / 2
function isPalidromStringTwoPointerMethods(str) {
    let leftIndex = 0;
    let rightIndex = str.length - 1;

    for (let i = 0; i < str.length / 2; i++) {
       if(str[leftIndex] === str[rightIndex]){
         leftIndex++;
         rightIndex--;
       }else{
         return false;
       }
    }
    return true;
}

//Reverse Only the words in a Sentance 
function reverseWords(sentence){
  let splitWords = sentence.split(" ");
  let reverseWords = [];
  for(let i = splitWords.length - 1; i >= 0; i--){
    reverseWords.push(splitWords[i]);
  }
  return reverseWords.join(" ");
}

//Find the longest word in a Sentence
function findLongestWords(sentence){
  let splitWords = sentence.split(" ");

  let highestLengthCar = "";
  let highestLength = 0;

  splitWords.forEach((words) => {
    if(words.length > highestLength){
      highestLengthCar = words;
      highestLength = words.length;
    }
  })

  return highestLengthCar;
}

//Count the Number of Words (Manually without split)
function countNumberOfWords(sentence){

}

//Find all Substrings of a String 
//Input: abc
//Output: a, ab, ac, b, bc, c

