import generatePassword from "../services/passwordServices.js";
import validatePassword from "../utils/validation.js"

export default function generateCommand(args) {
    const length = args[0];

    const validation = validatePassword(length);

    if (!validation.valid) {
        console.log(validation.message);

        if (!length) {
            console.log('\nUsage:');
            console.log('node src/index.js generate <length>');
        }

        return;
    }

    const password = generatePassword(Number(length));

    console.log("\n=========================");
    console.log("Password Generated");
    console.log("=========================\n");

    console.log(`Length   : ${length}`);
    console.log(`Password : ${password}`);

    console.log("\n=========================");
}
