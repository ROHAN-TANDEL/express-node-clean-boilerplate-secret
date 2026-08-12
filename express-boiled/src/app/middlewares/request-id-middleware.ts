import { randomUUID } from "crypto";
export class RequestIdMiddleware {
    context;
    constructor(context) {
        this.context = context;
    }
    startMiddleware() {
        return (req, res, next) => {
            // const headerRequestId = req.headers['x-request-id'];
            // req.requestId = typeof headerRequestId === 'string' ? headerRequestId : randomUUID();
            // res.setHeader('X-Request-Id', req.requestId);
            // const startedAt = process.hrtime.bigint();
            req.headers["x-request-id"] ??= randomUUID();
            res.locals.requestId = req.headers["x-request-id"];
            next();
        };
    }
}
//# sourceMappingURL=request-id-middleware.js.map