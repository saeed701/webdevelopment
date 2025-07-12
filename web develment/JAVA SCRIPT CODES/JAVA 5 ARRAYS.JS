// let marks = [10, 20, 30, 40, 50]
// console.log(marks);

// // array  indices
// marks[2]
// marks[2] = 66

//looping  over arrays
// let names = ["toyota", "honda", "kia", "changhan", "houndai", "suzuki"]


// //for loop
// for (let a = 1; a <= names.length; a++) {
//  console.log(names[a]);
// }


// //for of loop
// for (const a of names) {
//     console.log(a);   
// }


// //for of loop example2
// for (const k of names) {
//     // console.log(k.toUpperCase());   
//     console.log(k.toUpperCase(),k.length);
// }



// praties q1
//for a given arrays with marks of student ->[90, 90, 90, 90, 90] find the avrage marks of student of the entrie class
let num = [20, 30, 40, 60, 90]
let sum = 0;
for (const val of num) {
    sum = sum + val }
let avg = sum / num.length
console.log(`avrage marks of the class = ${avg}`);


//  praties q2
// let items = [200, 300, 400, 600, 900]
// let i = 0
// for (const val of items) {
//     let dis = val / 10;
//     console.log(`the value before offer ${i} = ${val}`);
//     items[i] -= dis;
//     console.log(`the value after offer = ${items[i]}`);
//     i++}


//another way to do this question
// for (let i = 0; i < items.length; i++) {
//    let dis = i/ 10;
//    items[i]-=dis
// }
// console.log(items);


//array methods

// //.push add shomthing in end 
// let xyz = ["sun","bluebary","moon"] 
// xyz.push("chips")
// console.log(xyz);


// .pop() DELELT FORM backted   
// let uuu=["how","who","apple"]
// console.log(uuu);
// uuu.pop()
// console.log(uuu);
// console.log("deleted",deleteduuu); //deleted line code not working!
 
// .pop from chatgpt
// let uuu = ["how", "who", "apple"];
// console.log(uuu);
// let deleteduuu = uuu.pop(); // save the deleted item in a variable
// console.log(uuu);
// console.log("deleted", deleteduuu);



//convert arrey in string "tostringz()"
// let f=["hoe","moe","koe",]
// console.log(f);
// console.log(f.toString());



// .concat meanning to join. joim multipule arrays & return result
// let a = ["how","who"]
// let b = ["we","are"]
// let eqal = a.concat(b)
// console.log(eqal);


//.unshift work on add on start
// let a = ["kasif", "hm"]
// console.log(a);
// console.log(a.unshift("toyota"));
// console.log(a);



// .shift work on deleled on start
// let a = ["kasif", "hm"]
// console.log(a);
// console.log(a.shift());
// console.log(a);



// return a pice of array    // how its work slice(startidx,endidx)
// let a = ["kasif", "hm",]
// console.log(a);
// console.log(a.slice(0,3));



//splice() change origanel  array (add,reomve,replace) // how its work  splice(start idx,del count,newel1)
// let f = ["toyota", "honda","coroola","mg","kia"]
// console.log(f);
// f.splice(2,1,"how",)
// console.log(f);

// praties 1
// let company = ["google","yputube","facebook","w3school","tiktok",]



// reminder
//.push()  add shomthing in end
//.pop() DELELT FORM backted 
//convert arrey in string "tostringz()"
// .concat meanning to join. joim multipule arrays & return result
//.unshift work on add on start
// .shift work on deleled on start
// slice // return a pice of array // how its work slice(startidx,endidx)
//splice() change origanel  array (add,reomve,replace) // how its work  splice(start idx,del count,newel1)