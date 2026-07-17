# Calculator CLI

A simple and scalable **Node.js Command Line Interface (CLI) Calculator** that performs basic arithmetic operations like addition, subtraction, multiplication, and division.

The project is built using modern JavaScript ES Modules and follows a clean folder structure with separated commands and validation logic.

---

## Project Description

Calculator CLI allows users to perform mathematical operations directly from the terminal.

Supported operations:

* Addition
* Subtraction
* Multiplication
* Division

The application accepts commands and numbers through command-line arguments.

Example:

```bash
node src/index.js add 10 5
```

Output:

```text
Result: 15
```

---

## Current Folder Structure

```
calculator/
│
├── src/
│   ├── commands/
│   │   ├── addCommand.js
│   │   ├── subCommand.js
│   │   ├── mulCommand.js
│   │   ├── divCommand.js
│   │   └── helpCommand.js
│   │
│   ├── utils/
│   │   └── validation.js
│   │
│   └── index.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Node.js Version Requirement

Required:

```
Node.js >= 20.x
```

Check your installed version:

```bash
node --version
```

The project uses ES Modules, so `package.json` must include:

```json
{
  "type": "module"
}
```

---

## Installation Steps

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate into the project

```bash
cd calculator
```

### 3. Install dependencies

```bash
npm install
```

---

## Running Instructions

Run the calculator using:

```bash
node src/index.js <command> <number1> <number2>
```

or using npm:

```bash
npm start -- <command> <number1> <number2>
```

---

## Available Commands

| Command | Description                              |
| ------- | ---------------------------------------- |
| `add`   | Add two numbers                          |
| `sub`   | Subtract second number from first number |
| `mul`   | Multiply two numbers                     |
| `div`   | Divide first number by second number     |
| `help`  | Display available commands               |

---

## Usage Examples

### Addition

```bash
node src/index.js add 10 5
```

Output:

```
Result: 15
```

---

### Subtraction

```bash
node src/index.js sub 10 5
```

Output:

```
Result: 5
```

---

### Multiplication

```bash
node src/index.js mul 10 5
```

Output:

```
Result: 50
```

---

### Division

```bash
node src/index.js div 10 5
```

Output:

```
Result: 2
```

---

### Help Command

```bash
node src/index.js help
```

Displays all available commands and usage information.

---

## Validation Features

The application validates:

* Missing command arguments
* Missing numbers
* Invalid number inputs
* Unknown commands
* Division by zero

Examples:

```bash
node src/index.js add
```

Returns:

```
Error: Please provide two numbers.
```

---

## Current Limitations

* Only supports basic arithmetic operations.
* No calculation history is stored.
* No support for advanced mathematical functions.
* No interactive terminal mode.
* No user configuration support.

---

## Planned Next Steps

Future improvements:

* Add calculator history tracking.
* Add scientific operations:

  * Power
  * Square root
  * Percentage
* Add interactive CLI mode.
* Add automated unit tests.
* Add TypeScript support.
* Add npm package publishing support.
* Add CI/CD pipeline integration.

---

## License

This project is currently for learning and development purposes.
