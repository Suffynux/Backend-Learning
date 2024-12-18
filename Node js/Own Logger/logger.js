const EventEmitter = require('EventEmitter');
const fs = require('fs');
const os = require('os');

class Logger extends EventEmitter {
    log(message) {
        this.emit('messsage' , {message})
    }
}

const logger = new Logger();
const logFile = './eventlog.txt';

const logtoFile = (event) {
    const 
}