import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
    res.status(200).json({
        status: "healthy",
        service: "api"
    });
});

export default router;