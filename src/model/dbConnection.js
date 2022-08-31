const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'aaaaa',
    database: 'bike_rent_db'
});

exports.db = db;