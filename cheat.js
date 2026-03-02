const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log("\n===== Simple Calculator =====");
  console.log("1. Add");
  console.log("2. Subtract");
  console.log("3. Multiply");
  console.log("4. Divide");
  console.log("5. Exit");
}

function startCalculator() {
  showMenu();

  rl.question("Choose an operation (1-5): ", (choice) => {

    if (choice === '5') {
      console.log("Goodbye!");
      rl.close();
      return;
    }

    rl.question("Enter first number: ", (firstInput) => {
      rl.question("Enter second number: ", (secondInput) => {

        const num1 = parseFloat(firstInput);
        const num2 = parseFloat(secondInput);

        if (isNaN(num1) || isNaN(num2)) {
          console.log("Invalid input! Please enter valid numbers.");
          startCalculator();
          return;
        }

        let result;

        switch (choice) {
          case '1':
            result = num1 + num2;
            break;
          case '2':
            result = num1 - num2;
            break;
          case '3':
            result = num1 * num2;
            break;
          case '4':
            if (num2 === 0) {
              console.log("Cannot divide by zero!");
              startCalculator();
              return;
            }
            result = num1 / num2;
            break;
          default:
            console.log("Invalid choice!");
            startCalculator();
            return;
        }

        console.log(`Result: ${result}`);
        startCalculator(); // Run again
      });
    });
  });
}

startCalculator();