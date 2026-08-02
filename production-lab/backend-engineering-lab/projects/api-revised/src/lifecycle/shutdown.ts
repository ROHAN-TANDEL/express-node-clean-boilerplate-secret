import type { Server } from "http";
import type { ApplicationContext } from "../context";
import {disconnectDatabase} from "../database";

export function registerShutdown(

    server: Server,

    context: ApplicationContext

) {

    process.on(

        "SIGINT",

        () => shutdown(

            server,

            context

        )

    );

}


async function shutdown(

    server: Server,

    context: ApplicationContext

) {

    server.close(

        async () => {

            await disconnectDatabase(context.database);

            context.logger.info(

                "Shutdown Complete"

            );

            process.exit(

                0

            );

        }

    );

}