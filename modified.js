// dynamic  Input
// Import the readline module

const readline = require('readline'); 

// Create an interface for input/output
function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close();
      resolve(answer);
    });
  });
}

function Calculator(numa,numb, op)
{
   switch (op)
    { 
            case 1: return numa + numb;
            break;
            case 2: return numa - numb;
            break;
            case 3: return numa * numb;
            break;
            case 4: return numa / numb;
            break;
            case 5: return numa % numb;
            break;
    }
}
     

console.log(" **  Calculator **");
console.log("Press 1 for addition");
console.log("Press 2 for subtraction");
console.log("Press 3 for multiplication");
console.log("Press 4 for division");
console.log("Press 5 for modulous");

async function main() {

const op = Number(await ask("Enter choice: "));
  const numa = Number(await ask("Enter first number: "));
  const numb = Number(await ask("Enter second number: "));   
 const result = Calculator(numa, numb, op);
  console.log("Result: " + result);
}
main();