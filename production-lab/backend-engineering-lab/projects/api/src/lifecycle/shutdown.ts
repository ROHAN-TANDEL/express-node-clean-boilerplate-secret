import type { Server } from "node:http";

import type { Logger } from "pino";

export function registerShutdown(

    server: Server,

    logger: Logger

): void {

    async function shutdown(signal: string): Promise<void> {

        logger.info({ signal }, "Shutdown signal received");

        server.close(() => {

            logger.info("HTTP Server Closed");

            process.exit(0);

        });

    }

    process.on("SIGINT", () => {

        void shutdown("SIGINT");

    });

    process.on("SIGTERM", () => {

        void shutdown("SIGTERM");

    });

}