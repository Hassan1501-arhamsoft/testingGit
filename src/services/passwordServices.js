const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

export default function generatePassword(length) {
    const addingCharacters = uppercase + lowercase + numbers + symbols;

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * addingCharacters.length);
        password += addingCharacters[randomIndex];
    }

    return password;
}