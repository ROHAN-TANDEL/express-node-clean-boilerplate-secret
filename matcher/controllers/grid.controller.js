const gridServ = require("../services/grid.service");

async function transactionsColumns(req, res)
{
    const { schema, database } = req.client;

    const { userId, gridViewKey, returnTypeGroupId, viewType } = req.body;

    const result = await gridServ.transactionsColumns({schema, database, userId, gridViewKey, returnTypeGroupId, viewType});

    return res.status(200).json({'data': result  });
}

module.exports = {
    transactionsColumns
};
