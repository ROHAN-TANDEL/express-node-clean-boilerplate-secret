import express, {} from "express";
export class AsyncHandlerMiddleware {
    context;
    constructor(context) {
        this.context = context;
    }
    startMiddleware() {
        console.log({ middleware_status: "setting async error handler middleware..." });
        return (fn) => (req, res, next) => {
            Promise.resolve(fn(req, res, next)).catch(next);
        };
    }
}
//# sourceMappingURL=async-handler-middleware.js.map