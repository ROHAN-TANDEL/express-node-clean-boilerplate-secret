import type {IRequestLike} from "../interfaces/IRequestLike.js";
import type {IResponseLike} from "../interfaces/IResponseLike.js";


export class LivenessCheck {

    constructor(private readonly context:any) {
    }

    run()
    {
        return  (_req: IRequestLike, res: IResponseLike): unknown =>
            res.status(200).json({ status: 'UP' });
    }
}
