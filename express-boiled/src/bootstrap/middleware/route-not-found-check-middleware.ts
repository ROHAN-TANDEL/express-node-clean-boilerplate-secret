import type {IRequestLike} from "../interfaces/IRequestLike.js";
import type {IResponseLike} from "../interfaces/IResponseLike.js";


export class RouteNotFound {

    constructor(private readonly context:any) {
    }

    run()
    {
        return (req: IRequestLike, res: IResponseLike): unknown =>
            res.status(404).json({
                status: 'failed',
                message: `Route not found: ${req.method} ${req.originalUrl}`
            });
    }
}
