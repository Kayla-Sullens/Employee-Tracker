require("dotenv").config();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PW,
    database: "employee_db"
});

db.connect();

module.exports = db;