import { bootstrap } from "./bootstrap";
import { registerShutdown } from "./lifecycle";

async function start() {

    try {

        const { app,  context } = await bootstrap();

        const server = app.listen(

            context.config.app.port,

            () => {

                context.logger.info({

                    service: context.config.app.name,

                    environment: context.config.app.environment,

                    port: context.config.app.port

                }, "HTTP Server Started");

            }

        );

        registerShutdown(server, context.logger);

    }

    catch (error) {

        console.error(error);

        process.exit(1);

    }

}

start();