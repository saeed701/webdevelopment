console.log("hey my name is harry")
// var d = 5;
// var b = 10;
//  var c = "harry"; not use

let a = 12;
let b = 10;
let c = "harry";

console.log(a + b)
// console.log(a + b + c)  another exapmle
console.log(typeof a, typeof b, typeof c)

{
    let a = 66;
    console.log(a);
} // a group

console.log(a);

// const a1 = 5;


// new example
let x = "harry";
let y = 22;
let z = 4.2;
const p = true;
let q = undefined;
let r = null;
console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);


// new example
let o = {
    name: "harry",
    "jop code": 5600,
    "is not good " :false,
}
o.selory= "2000coroes "
console.log(o) 
o.selory= "3000coroes "
console.log(o)


/*
When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.
for anythink print use console.log();*/