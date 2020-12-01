const fs = require('fs');

export class AppLogger {

    static logFile = fs.createWriteStream('./logger/files/log', { flags: 'a' });
    static logStdout = process.stdout;

    static error(error) {
        try {
            this.logFile.write(`${error.stack.split(')')[0] || error.message} \n`);
        } catch (e) {
            console.error(e.message);
        }
    }
}
