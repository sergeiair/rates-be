import {is} from "ramda";


const fs = require('fs');

export class AppLogger {

    static logFile = fs.createWriteStream('./logger/files/log', { flags: 'a' });
    static logStdout = process.stdout;

    static error(error) {
        try {
            if (is(Object, error)) {
                if (error.stack) {
                    this.logFile.write(`${error.stack.split(')')[0]} \n`);
                } else if (!error.stack) {
                    this.logFile.write(`${error.message} \n`);
                } else {
                    this.logFile.write(`Unknown error ${error.toString()} \n`);
                }
            } else if (is(String, error)) {
                this.logFile.write(`${error} \n`);
            }
        } catch (e) {
            console.error(e.message);
        }
    }
}
