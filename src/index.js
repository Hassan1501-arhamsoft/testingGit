import generateCommand from "./commands/generateCommand.js"
import helpCommand from "./commands/helpCommand.js"
const args=process.argv.slice(2)
const [command, ...commandArgs]=process.argv.slice(2)
if(!command){
    helpCommand()
    process.exit(0)
}
switch(command){
    case "generate":
        generateCommand(commandArgs)
        break;
    case "help":
        helpCommand()
        break;
    default:
        console.log(`Unknown command: ${command}`);
        console.log('Run "node src/index.js help" to view available commands.');
}