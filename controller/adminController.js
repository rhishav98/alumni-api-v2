//registration
const db = require("../database/db");
exports.adminNotifications = (req, res) => {
    const title = req.body.title;
    const desc = req.title.desc;

    db.query((err, result) => {
        console.log(err);
        res.send(result);
    });
};