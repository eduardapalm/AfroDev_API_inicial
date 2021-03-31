const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3360,
    password: '@Ricduda0127',
    database: 'agenda'
});

module.exports = conexao;