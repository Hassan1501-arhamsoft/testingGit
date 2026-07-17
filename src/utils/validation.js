export function validateNumbers(firstNumber, secondNumber) {
  if (firstNumber === undefined || secondNumber === undefined) {
    console.log("Error: Please provide two numbers.");
    console.log("Example: node src/index.js add 10 5");
    return false;
  }

  if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    console.log("Error: Arguments must be valid numbers.");
    console.log("Example: node src/index.js add 10 5");
    return false;
  }

  return true;
}


export function validateDivision(secondNumber) {
  if (secondNumber === 0) {
    console.log("Error: Cannot divide by zero.");
    return false;
  }

  return true;
}


export function validateCommand(operation) {
  const commands = ["add", "sub", "mul", "div", "help"];

  if (!commands.includes(operation)) {
    console.log(`Error: Unknown command '${operation}'`);
    return false;
  }

  return true;
}