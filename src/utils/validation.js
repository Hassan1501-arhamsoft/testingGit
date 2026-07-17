export default function validation(length) {
    // Check if length was provided
    if (length === undefined) {
        return {
            valid: false,
            message: "Password length is required."
        };
    }

    // Check if length is a number
    if (isNaN(length)) {
        return {
            valid: false,
            message: "Password length must be a number."
        };
    }

    const passwordLength = Number(length);

    // Check if it's an integer
    if (!Number.isInteger(passwordLength)) {
        return {
            valid: false,
            message: "Password length must be a whole number."
        };
    }

    // Check minimum length
    if (passwordLength < 8) {
        return {
            valid: false,
            message: "Password length must be at least 8 characters."
        };
    }

    // Check maximum length
    if (passwordLength > 64) {
        return {
            valid: false,
            message: "Password length cannot exceed 64 characters."
        };
    }

    // Validation passed
    return {
        valid: true
    };
}