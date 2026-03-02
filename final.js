const readline = require('readline'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function h() {
  console.log(" *****************  Calculator *************");
}
h();

function Calculator() {

  rl.question("Enter first number: ", (firstInput) => {
    const numa = parseFloat(firstInput);
    if (isNaN(numa)) {
      console.error("Invalid number.");
      rl.close();
      return;
    }

    rl.question("Enter second number: ", (secondInput) => {
      const numb = parseFloat(secondInput);
      if (isNaN(numb)) {
        console.error("Invalid number.");
        rl.close();
        return;
      }

      console.log("Press 1 for addition");
      console.log("Press 2 for subtraction");
      console.log("Press 3 for multiplication");
      console.log("Press 4 for division");
      console.log("Press 5 for modulus");

      rl.question("Enter choice: ", (choice) => {
        const op = parseInt(choice);

        let result;
        switch (op) {
          case 1: result = numa + numb; break;
          case 2: result = numa - numb; break;
          case 3: result = numa * numb; break;
          case 4: result = numa / numb; break;
          case 5: result = numa % numb; break;
          default: result = "Invalid choice";
        }

        console.log("Result = " + result);
        rl.close();
      });
    });
  });
}

Calculator();
