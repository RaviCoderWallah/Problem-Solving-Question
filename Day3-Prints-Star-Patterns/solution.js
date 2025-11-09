//1. Print Right-Angled Star Triangle
let n1 = 5;

for (let i = 1; i <= n1; i++) {
  for (let r = 0; r < i; r++) {
    document.write("*");
  }
  document.write("<br>")
}

// 2. Print Inverted Right-Angled Triangle
let n2 = 5;

for(let i = 1; i <= n2; i++){
  for(let k = n2; k >= i; k--){
    document.writeln("*");
  }
  document.writeln("<br>");
}


//3. Print Pyramid Pattern
let n3 = 5;

for(let i = 1; i <= n3; i++){ //i = 2
  let str = "";
  let rightStar = "";

  for(let k = (n3 - 1); k >= i; k--){
    str += " "
  }

  for(let j = 1; j <= i; j++){
    str = str + "*"
  }

  for(let x = 0; x < (i - 1); x++){ //x = 1 //false
    rightStar = rightStar + "*"
  }

  console.log(str + rightStar)
}


//4. Print Inverted  Pyramid Pattern
let n4 = 5;

for(let i = 1; i <= n4; i++){ 
  let str = "";
  let rightStar = "";

  for(let k = 0; k < i - 1; k++){
    str += " "
  }

  for(let j = n4; j >= i; j--){
    str = str + "*"
  }

  for(let x = n4 - 1; x > (i - 1); x--){ 
    rightStar = rightStar + "*"
  }

  console.log(str + rightStar)
}




//Print hollow square

let hollowSquareNum = 5;

for (let i = 1; i <= hollowSquareNum; i++) {
    let str = "";
    if (i == 1 || i == hollowSquareNum) {
        for (let j = 1; j <= hollowSquareNum; j++) {
            str += '*';
        }
    }else{
         for (let j = 1; j <= hollowSquareNum; j++) {
            if(j == 1 || j == hollowSquareNum){
                str += '*';
            }else{
                str += " ";
            }
        }
    }

    console.log(str);
}

//Print Pyramid Square
let hollowPyramid = 5;

for(let i = 1; i <= hollowPyramid; i++){
    let str = "";
    for(let x = (hollowPyramid - 1); x >= i; x--){
        str += " "
    }
    for(let j = 1; j <= (2 * i - 1); j++){
      if(i == 1 || i == hollowPyramid || j == 1 || j == (2 * i - 1)){
          str += "*";
      }else{
        str += " ";
      }
    }
    console.log(str);
}



// Print Alternating Binary Triangle

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += (i % 2 == 1 ? j % 2 : (j + 1) % 2)
    }
    console.log(str);
}

