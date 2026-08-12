export default class RouteNotFoundCheckMiddleware {
    context;
    constructor(context) {
        this.context = context;
    }
    startMiddleware() {
        console.info({ route_not_found: "registering route not found middleware... " });
        return (req, res) => res.status(404).json({
            status: 'failed',
            message: `Route not found: ${req.method} ${req.originalUrl}`
        });
    }
}
//# sourceMappingURL=route-not-found-check-middleware.js.map