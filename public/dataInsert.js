"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callTs = void 0;
var mysql = require("mysql");
// MySQLデータベースへの接続情報
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'diversmap',
    database: 'divers'
});
var insertData;
// MySQLに接続
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
function insertIntoMysql() {
    var sql = 'INSERT INTO divers (team, comment, latitude, longitude) VALUES ?';
    connection.query(sql, [insertData], function (err) {
        if (err) {
            console.error('Error inserting data: ' + err.stack);
            return;
        }
        console.log('Data inserted successfully');
    });
}
function callTs(team, comment, lat, lng) {
    insertData = [team, comment, lat, lng];
    insertIntoMysql();
}
exports.callTs = callTs;
