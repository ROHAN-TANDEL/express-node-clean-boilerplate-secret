export class LivenessCheckScript {
    context;
    constructor(context) {
        this.context = context;
    }
    run() {
        return (_req, res) => res.status(200).json({ status: 'UP' });
    }
}
//# sourceMappingURL=liveness-check-script.js.map