const taxServ = require('../services/tax.service');

async function  returnsAll(req, res)
{
    const { schema, database } = req.client;
    const { offset, limit } = req.query;

    const result = await taxServ.returnAll({schema, database, offset, limit});
    console.log('result', result);
    return res.status(200).json({"data" : result || {}});
}

module.exports = {
    returnsAll
};
