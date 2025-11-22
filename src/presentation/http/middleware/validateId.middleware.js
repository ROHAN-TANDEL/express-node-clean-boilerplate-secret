module.exports = function validateId(req, res, next) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: "ID must be a number" });
    }

    if (id < 10 || id > 1000) {
        return res.status(400).json({ error: "ID must be between 10 and 1000" });
    }

    next();
};
