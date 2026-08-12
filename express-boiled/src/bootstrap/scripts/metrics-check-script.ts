import { Registry } from 'prom-client';
import registryHelper from "../helper/registryHelper.js";
export class MetricsCheckScript {
    context;
    constructor(context) {
        this.context = context;
    }
    run() {
        const registryHelp = registryHelper.registry;
        return async (_req, res) => {
            res.setHeader('Content-Type', registryHelp.contentType);
            res.end(await registryHelp.metrics());
        };
    }
}
//# sourceMappingURL=metrics-check-script.js.map