import {Logs} from "../logs/pino-logs.js";
import {EnvLoad} from "../env/env-load.js";
import {StartServer} from "../server/start-server.js";
import {StopServer} from "../server/stop-server.js";


export class Kernal {
    constructor(
        private readonly logs : Logs,
        private readonly envLoad: EnvLoad,
        private readonly startServer: StartServer,
        private readonly stopServer: StopServer,
    ) {
    }

    connect()
    {
        return {
            log : this.logs,
            env : this.envLoad,
            server : { start : this.startServer, stop : this.stopServer },
        };
    }
}
