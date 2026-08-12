/**
 * Start the server
 */
export class StartServer {
    constructor(private app: any, context:any) {
        return app.listen(context.config.port, () => {

            context.logger.info("Server Started");

        });
    }
}