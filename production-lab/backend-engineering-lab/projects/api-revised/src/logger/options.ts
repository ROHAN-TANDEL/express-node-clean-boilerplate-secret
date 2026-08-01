export function createLoggerOptions(config :  any) {
    return {

        level: config.logger.level, // we need config here
        transport :  { target: "pino-pretty" },


    }
}
