const sql = require('mssql');

const masterConfig = {
    user: process.env.DB_MASTER_USERNAME,
    password: process.env.DB_MASTER_PASSWORD,
    server: process.env.DB_MASTER_HOST,
    port: parseInt(process.env.DB_MASTER_PORT),
    database: process.env.DB_MASTER_DATABASE,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
};

let clientPool = null;

async function getMasterPool() {
    return sql.connect(masterConfig);
}

async function setClientConnection(config) {

    if (clientPool) {
        return clientPool;
    }
    clientPool = await sql.connect({
        user: config.username,
        password: config.password,
        server: config.host,
        port: parseInt(config.port),
        database: config.database,
        options: {
            encrypt: false,
            trustServerCertificate: true,
        },
    });

    return clientPool;
}

function getClientPool() {
    if (!clientPool) {
        throw new Error('Client DB not initialized');
    }
    return clientPool;
}

module.exports = {
    getMasterPool,
    setClientConnection,
    getClientPool,
};