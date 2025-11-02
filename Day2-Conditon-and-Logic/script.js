// Check Triangle Type Using Sides and Angles

function typeOFTriangle(a, b, c) {
    let maximumSides;

    if (a > b && a > c) {
      return  maximumSides = a;
    } else if (b > a && b > c) {
       return maximumSides = b
    } else {
      return  maximumSides = c;
    }
}

console.log(typeOFTriangle(5, 4, 3));

