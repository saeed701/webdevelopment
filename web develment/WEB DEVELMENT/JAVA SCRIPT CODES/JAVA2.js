let a = 3
let b = 6

console.log("Arithmetic Operators");
console.log(a+b);//  +	Addition
console.log(a-b);//  -	Subtraction
console.log(a*b);//  *	Multiplication
console.log(a**b);// **	Exponentiation (ES2016)
console.log(a/b);//  /	Division
console.log(a%b);//  %	Modulus (Division Remainder)

// Post-increment: returns current value, then increments
console.log(a++);//   3 (a becomes 4 after this)
console.log(a+b);
//  Post-decrement: returns current value, then decrements
console.log(a--);//  4 (a becomes 3 after this)
console.log(a-b);

console.log("Assignment Operators");
console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);
// a = 3
console.log(a**=b);

console.log("comparison operatin");
console.log(a==b);//equal (value)
console.log(a===b);//equal value and equal type
console.log(a!=b);//not equal value
console.log(a!==b);//not equal value or not equal type
console.log(a>b);//	greater than
console.log(a<b);//	less than
console.log(a>=b);//greater than or equal to
console.log(a<=b);//less than or equal to
console.log(a > b ? "a is greater" : "b is greater"); // ternary operator example


console.log("lgical Operators");
console.log(a&&b);//dono condition sahi ha
console.log(a||b);//ek bhi condition  sahi ho
console.log(a!=b);//condition ka ulta karna


// another code if else

// let age = 12
// if (age == 18) {
//     console.log(age);
//     console.log("you can drive");
// }
// else if (age == 10) {
//     console.log(age);
//     console.log("no you are to young");
// }
// else  {
//     console.log(age);
//     console.log("yor are a 1 year boy");
// }