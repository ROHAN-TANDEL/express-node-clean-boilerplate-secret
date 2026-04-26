require

async function interimStatus(req, res) {
    return res.json({"w" : 12});
}

module.exports = {
    interimStatus
};
