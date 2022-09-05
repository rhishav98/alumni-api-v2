const db = require("../database/db");
exports.savePayments = (req, res) => {
  console.log("request", req.body);
  const { email, id } = req.body?.token;
  const { address_city, address_country, address_line1, address_zip, name } =
    req.body.token?.card;

  const address =
    address_line1 +
    "," +
    address_city +
    "," +
    address_zip +
    "," +
    address_country;

  const itemId = [];
  const items = req.body.items?.map((item) => itemId.push(item.id));

  db.query(
    "INSERT INTO payment( name, email, tid, address,itemid) VALUES (?,?,?,?,?)",
    [name, email, id, address, itemId.join()],
    (err, result) => {
      if (err) {
        console.log(err.message);
      } else {
        res.send(result);
      }
    }
  );
};
