//function1

function like(name) {
    console.log(`his friend how ${name} his also very bad menners`);
    console.log(`his friend how ${name} his also very normal menners`);
    console.log(`his friend how ${name} his also very good menners`);
}

like("omer")
like("kasif")


//function2 

function sum(a, b, c = 3) {
    // console.log(a+b);
    return a + b + c
}
let rusult = sum(2, 5)
let rusult2 = sum(5, 5)
let rusult3 = sum(8, 5)
console.log("the sum of these number:", rusult);
console.log("the sum of these number:", rusult2);
console.log("the sum of these number:", rusult);

//function3

const function3 = (a) => {
    console.log("i am a arrow function", a);

}
function3(20);
function3(40);
function3(60);
