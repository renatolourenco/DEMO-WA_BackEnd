require('dotenv').config()
const sql = require('mssql');

const connStr = `Server=${process.env.MSSQL_SERVER};Database=${process.env.DATABASE_NAME};User Id=${process.env.USERNAME};Password=${process.env.PASSWORD};`;

sql.connect(connStr)
    .then(conn => global.conn = conn)
    .catch(err => console.log(err));

function findOrderByQuery(sqlQry) {
    return global.conn.request()
        .query(sqlQry);
}

module.exports = {
    findOrderByQuery
};