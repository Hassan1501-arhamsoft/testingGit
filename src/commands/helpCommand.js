export default function helpCommand() {
  console.log(`
Calculator CLI

Usage:
  node src/index.js <command> <number1> <number2>

Commands:
  add <number1> <number2>    Add two numbers
  sub <number1> <number2>    Subtract second number from first number
  mul <number1> <number2>    Multiply two numbers
  div <number1> <number2>    Divide first number by second number
  help                       Show this help message

Examples:
  node src/index.js add 10 5
  node src/index.js sub 10 5
  node src/index.js mul 10 5
  node src/index.js div 10 5
  node src/index.js help
`);
}