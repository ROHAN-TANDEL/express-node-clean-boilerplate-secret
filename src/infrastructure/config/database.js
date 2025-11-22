const { Pool } = require('pg');
const config = require('./env');

const pool = new Pool({
    //host: process.env.DB_HOST || 'localhost',
    host: config.db.host,
    port: config.db.port,
    //port: process.env.DB_PORT || 5432,
    user: config.db.user,
    //user: process.env.DB_USER || '',
    password: config.db.password,
    //password: process.env.DB_PASSWORD || '',
    database: config.db.name
    //database: process.env.DB_NAME || 'vault',
});

module.exports = pool;
