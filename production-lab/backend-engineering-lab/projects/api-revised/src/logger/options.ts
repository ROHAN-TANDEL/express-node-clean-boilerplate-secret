

const options = {

    level: "debug", // we need config here
    transport :  { target: "pino-pretty" }

}

export function createLoggerOptions() {
    return options;
}
