const mysql = require("mysql");
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "alumni",
});
db.connect(function(err) {
    if (err) {
        console.log(err.message, "rhishav");
        throw err;
    }
    console.log("connected");
});

module.exports = db;