import helpCommand from "./commands/helpCommand.js";
import { Add } from "./commands/addCommand.js";
import { Subtract } from "./commands/subCommand.js";
import { Multiply } from "./commands/mulCommand.js";
import { Divide } from "./commands/divCommand.js";

import {
  validateNumbers,
  validateDivision,
  validateCommand
} from "./utils/validation.js";


const terminalData = process.argv.slice(2);

const operation = terminalData[0];

const firstNumber = Number(terminalData[1]);
const secondNumber = Number(terminalData[2]);


if (!validateCommand(operation)) {
  helpCommand();
  process.exit(1);
}


switch (operation) {

  case "add":
    if (validateNumbers(firstNumber, secondNumber)) {
      Add(firstNumber, secondNumber);
    }
    break;


  case "sub":
    if (validateNumbers(firstNumber, secondNumber)) {
      Subtract(firstNumber, secondNumber);
    }
    break;


  case "mul":
    if (validateNumbers(firstNumber, secondNumber)) {
      Multiply(firstNumber, secondNumber);
    }
    break;


  case "div":
    if (
      validateNumbers(firstNumber, secondNumber) &&
      validateDivision(secondNumber)
    ) {
      Divide(firstNumber, secondNumber);
    }
    break;


  case "help":
    helpCommand();
    break;
}