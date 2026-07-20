## Run without a command.
    node src/index.js
    === CLI Password Generator ===
    Command Syntax:
    node src/index.js <command> [arguments]
    =============
    Available Commands:
    generate <length>
    help          Show this help message
    =============
    Command Examples:
    node src/index.js generate 12
    node src/index.js help
## Run help.
    node src/index.js help
    === CLI Password Generator ===
    Command Syntax:
    node src/index.js <command> [arguments]
    =============
    Available Commands:
    generate <length>
    help          Show this help message
    =============
    Command Examples:
    node src/index.js generate 12
    node src/index.js help
## Run an unknown command.
    ode src/index.js 23
    Unknown command: 23
    Run "node src/index.js help" to view available commands.
## Generate a valid password.
    node src/index.js generate 12
    =========================
    Password Generated
    =========================

    Length   : 12
    Password : _T8@6II[8v@1

    =========================
## Generate length 8.
    node src/index.js generate 8

    =========================
    Password Generated
    =========================

    Length   : 8
    Password : @^@p;62c

    =========================
## Generate length 64.
    node src/index.js generate 64

    =========================
    Password Generated
    =========================

    Length   : 64
    Password : >Ct*:^Ux!]ZTfRNk4V(unH;!K{AV<dX(x?)ND40BeB{Hv%qQnm-:}el)dsQE429?

    =========================
## Generate with no length.
    node src/index.js generate
    Password length is required.

    Usage:
    node src/index.js generate <length>
## Generate with text instead of a number.
    node src/index.js generate password
    Password length must be a number.
## Generate with a negative number.
    node src/index.js generate -10
    Password length must be at least 8 characters.
## Generate with zero.
    node src/index.js generate 0
    Password length must be at least 8 characters.
## Generate with a decimal.
    node src/index.js generate 10.9
    Password length must be a whole number.
## Generate with a value greater than 64.
    node src/index.js generate 69
    Password length cannot exceed 64 characters.