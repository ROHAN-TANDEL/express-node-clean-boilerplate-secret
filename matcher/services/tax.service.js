const db = require('../models/db');

/**
 * return All
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
async function returnAll({schema, database, offset, limit})
{
    const prefix = `${database}.${schema}.`;

    const query = `
    SELECT * FROM ${prefix}tax_returns
    ORDER BY id ASC
    OFFSET ${offset} ROWS
    FETCH NEXT ${limit} ROWS ONLY;
                 `;

    return await db.query(query);
}

async function returnsColumns({schema, database})
{
    const prefix = `${database}.${schema}.`;
    const query = `
    `;

    return await db.query(query);
}

module.exports = {
    returnAll
};

