const { getClientPool } = require('../config/db');

async function query(sqlQuery, inputs = {}) {
    const pool = getClientPool();
    const request = pool.request();

    for (const key in inputs) {
        request.input(key, inputs[key]);
    }

    const result = await request.query(sqlQuery);
    return result.recordset;
}

module.exports = { query };