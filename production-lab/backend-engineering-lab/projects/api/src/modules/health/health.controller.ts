import { Request, Response } from "express";

import { HealthService } from "./health.service.js";

export class HealthController {

    constructor(

        private readonly service: HealthService

    ) {}

    getHealth = (_req: Request, res: Response) => {

        const result = this.service.getHealth();

        res.status(200).json(result);

    };

}