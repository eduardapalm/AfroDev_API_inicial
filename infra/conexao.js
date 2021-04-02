const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '@ricduda01',
    database: 'agenda'
});

module.exports = conexao