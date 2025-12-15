// Class Question 

// 1. Find if One String Is a Substring of Another (Manual Method)
//Input: Main string: "hellothere" target: "there"
//Ouput: true;
function isSubString(str, subStr) {

  for (let i = 0; i <= str.length - subStr.length; i++) {
    let match = true;

    for (let j = 0; j < subStr.length; j++) {
      if (str[i + j] !== subStr[j]) {
        match = false;
        break;
      }
    }

    if (match) return true;
  }
  return false;
}

//2. Check if one string is Rotation of Another
//Input: String: "Hello world" pattern: "wor"
//Output: Found at index 6
function indexOf(str, subStr) {

  for (let i = 0; i <= str.length - subStr.length; i++) {
    let match = true;

    for (let j = 0; j < subStr.length; j++) {
      if (str[i + j] !== subStr[j]) {
        match = false;
        break;
      }
    }

    if (match) return i;
  }
  return -1;
}

// 3. Check if One String is Rotation of Another
// Input: "abcde", "cdeab"
// Output: Rotation
function rotationStr(s1, s2) {
  let mainString = s1 + s1;
  return isSubString(mainString, s2);
}

//Homework Questions 




