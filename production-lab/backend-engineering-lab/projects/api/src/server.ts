import { bootstrap } from "./bootstrap";

const {

    app,

    context

} = bootstrap();

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