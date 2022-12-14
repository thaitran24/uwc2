require('dotenv').config()
const ENV = process.env;

const DB_CONFIGS = {
    host: ENV.DB_HOST,
    user: ENV.DB_USER,
    password: ENV.DB_PASSWORD,
    database: ENV.DB_NAME,
    port: ENV.DB_PORT || "3306"
}

module.exports = DB_CONFIGS;