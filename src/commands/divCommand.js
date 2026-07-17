export function Divide(a, b) {
  if (b === 0) {
    console.log("Error: Division by zero is not allowed.");
    return;
  }

  console.log(`Result: ${a / b}`);
}