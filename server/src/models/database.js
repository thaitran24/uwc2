const mysql = require('mysql');
const DB_CONFIGS = require('../configs/db.config')

const database = mysql.createConnection({
    host: DB_CONFIGS.host,
    user: DB_CONFIGS.user,
    password: DB_CONFIGS.password,
    database: DB_CONFIGS.database,
    port: DB_CONFIGS.port
}); 

module.exports = database;
