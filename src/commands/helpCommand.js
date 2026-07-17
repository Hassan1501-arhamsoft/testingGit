export default function helpCommand() {
    console.log("=== CLI Password Generator ===");
    console.log("Command Syntax:");
    console.log("   node src/index.js <command> [arguments]");
    console.log("=============");
    console.log("Available Commands:");
    console.log("   generate <length>");
    console.log("   help          Show this help message");
    console.log("=============");
    console.log("Command Examples:");
    console.log('   node src/index.js generate 12');
    console.log("   node src/index.js help");
}