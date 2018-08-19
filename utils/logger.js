const winston = require("winston");

const transports = [
   new winston.transports.Console({ level: 'debug' }),
   new winston.transports.File({
    filename: './log/info.log',
    level: 'info'
  }),
  new winston.transports.File({
    filename: './log/debug.log',
    level: 'debug'
  }),
   new winston.transports.File({
    filename: './log/error.log',
    level: 'error'
  }),
]

const exceptions = [
  new winston.transports.File({ filename: './log/exceptions.log' })
]

const logger = winston.createLogger({
    transports: [
        ...transports
      ],
      exceptionHandlers: [
       ...exceptions
      ]
  });

logger.exitOnError = false;

module.exports = logger
