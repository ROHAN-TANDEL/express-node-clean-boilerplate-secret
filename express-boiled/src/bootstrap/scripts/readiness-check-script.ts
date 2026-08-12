import type {IResponseLike} from "../interfaces/IResponseLike.js";
import type {IRequestLike} from "../interfaces/IRequestLike.js";

export class ReadinessCheck {

    constructor(private readonly context:any) {
    }

    run()
    {
        return async (_req: IRequestLike, res: IResponseLike): Promise<unknown> => {

            try {

                await this.context.pool?.query('SELECT 1');
                if (!this.context.redisClient) throw new Error('Redis client is unavailable');
                if (this.context.redisClient.ping) await this.context.redisClient.ping();
                return res.status(200).json({ status: 'READY' });

            } catch (error) {

                this.context.logger.warn({ err: error }, 'readiness check failed');
                return res.status(503).json({ status: 'NOT_READY' });

            }
        };
    }
}