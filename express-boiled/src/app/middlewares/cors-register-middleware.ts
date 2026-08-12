import cors from "cors";
export class CorsRegisterMiddleWare {
    context;
    constructor(context) {
        this.context = context;
    }
    startMiddleware() {
        console.log({ middleware_status: "setting cors middleware..." });
        const allowedOrigins = this.context.env.CORS_ORIGIN.split(',').map((origin) => origin.trim());
        return cors({ origin: allowedOrigins.includes('*') ? '*' : allowedOrigins, credentials: !allowedOrigins.includes('*') });
    }
}
//# sourceMappingURL=cors-register-middleware.js.map