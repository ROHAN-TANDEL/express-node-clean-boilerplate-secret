require('dotenv').config();

const config = {
    app: {
        port: Number(process.env.DB_PORT) || 3000,
        env: process.env.NODE_ENV || "development"
    },
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME
    }
};

module.exports = config;
