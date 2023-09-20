const { createLogger, format, transports } = require('winston');
const { combine, timestamp, colorize, simple, json, printf } = format;


const logConfiguration = {
    transports: [
        new transports.Console({
            level: process.env.LOG_LEVEL || 'info',
            format: combine(
                colorize(),
                simple(),
                printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
            )
        }),
        new transports.File({
            level: 'error',
            // Create the log directory if it does not exist
            filename: 'logs/errors.log',
            format: json()
        }),
        new transports.File({
            level: 'info',
            // Create the log directory if it does not exist
            filename: 'logs/detailed.log',
            format: json()
        })
    ],
    format: combine(
        timestamp(),
    ),
};

const logger = createLogger(logConfiguration);

module.exports = logger;