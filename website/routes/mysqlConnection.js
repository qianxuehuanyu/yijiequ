/**
 * Created by plter on 2016/12/5.
 */

const mysql = require("mysql");

var conn = mysql.createConnection({
    host: "sql.w108.vhostgo.com",
    user: "gavenmysql",
    password: "mysql_123456",
    database: "gavenmysql"
});

conn.connect(function (err) {
    if (err) {
        console.error(err);
    }
});

module.exports = conn;

