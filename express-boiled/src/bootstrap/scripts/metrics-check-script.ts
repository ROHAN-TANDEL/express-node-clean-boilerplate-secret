import { Registry } from 'prom-client';
import type {IRequestLike} from "../interfaces/IRequestLike.js";
import type {IResponseLike} from "../interfaces/IResponseLike.js";
import registryHelper from "../helper/registryHelper.js";


export class MetricsCheck {

    constructor(private readonly context:any) {
    }

    run()
    {
        const registryHelp = registryHelper.registry;

        return async (_req: IRequestLike, res: IResponseLike): Promise<void> =>
        {
            res.setHeader('Content-Type', registryHelp.contentType);
            (res as any).end(await registryHelp.metrics());
        };
    }
}