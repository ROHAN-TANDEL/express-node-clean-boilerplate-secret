const { getMasterPool, setClientConnection } = require('../config/db');

async function clientResolver(req, res, next) {
    try {
        const crmId = req.headers['x-client-id'] || req.query.crmId;

        if (!crmId) {
            return res.status(400).json({ error: 'Missing crmId' });
        }

        const master = await getMasterPool();

        // fetch client
        const result = await master
            .request()
            .input('crmId', crmId)
            .query(`SELECT * FROM client_details WHERE crm_id = @crmId`);

        const client = result.recordset[0];

        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }

        // switch DB
        await setClientConnection({
            host: client.db_host,
            port: client.db_port,
            database: client.database,
            username: client.db_username,
            password: client.password,
        });

        // attach schema info
        req.client = {
            crmId,
            schema: client.schema || 'dbo',
            database: client.database,
        };

        next();
    } catch (err) {
        console.error('Connection switch error:', err);
        res.status(500).json({ error: 'DB switch failed' });
    }
}

module.exports = clientResolver;