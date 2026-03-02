// dynamic  Input
// Import the readline module
const readline = require('readline'); 

// Create an interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function h()
{
    console.log(" *****************  Calculator *************");
}
h();
 
function Calculator(numa,numb)
{
    console.log("Press 1 for addition");
    console.log("Press 2 for subtraction");
    console.log("Press 3 for multiplication");
    console.log("Press 4 for division");
    console.log("Press 5 for modulous");
    var op;

    switch (op);
{
        case 1: return numa + numb;
        case 2: return numa - numb;
        case 3: return numa * numb;
        case 4: return numa / numb;
        case 5: return numa % numb;
//var c=a+b;
//var d=a-b;
//var e=a*b;
//var f=a/b;
//var g=a % b;
//console.log("Addition of two numbers = "+c);
//console.log("Subtraction of two numbers = "+d);
//console.log("Multiplication of two numbers = "+e);
//console.log("Division of two numbers = "+f);
//console.log("Modulous of two numbers = "+g);
}
}
rl.question("Enter first number: ", (firstInput) => {
    const numa = parseFloat(firstInput);
}
rl.question("Enter second number: ", (SecondInput) => {
    const numb = parseFloat(SecondInput);
}
rl.question("Enter choice (+, -, *, /, %): ", (op) => {
        
        rl.question("Enter choice ", (ThirdInput) => {
            const op = parseFloat(thirdInput);
Calculator(numa,numb);