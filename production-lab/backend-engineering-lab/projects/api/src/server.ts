import { bootstrap } from "./bootstrap/index.js";

async function start() {

    try {

        const {

            app,

            context

        } = await bootstrap();

        app.listen(

            context.config.app.port,

            () => {

                context.logger.info({

                    service: context.config.app.name,

                    environment: context.config.app.environment,

                    port: context.config.app.port

                }, "HTTP Server Started");

            }

        );

    }

    catch (error) {

        console.error(error);

        process.exit(1);

    }

}

start();