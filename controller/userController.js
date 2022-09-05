//registration
const db = require("../database/db");
exports.userRegistration = (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const centre = req.body.centre;
  const password = req.body.password;

  db.query(
    "INSERT INTO registration(username,email,centre,password) VALUES(?,?,?,?)",
    [username, email, centre, password],
    (err, result) => {
      db.query(
        "SELECT * from registration WHERE email = ?",
        [email],
        (err, result) => {
          res.user = result;
          db.query(
            "INSERT INTO  alumniupdate (aid) VALUES(?)",
            [result[0].id],
            (err, result) => {
              res.send(result);
            }
          );
          console.log(err);
          res.send(result);
        }
      );
    }
  );
};

//updateUserProfile

exports.userUpdate = (req, res) => {
  const { id } = req.params;
  console.log("user", req.body.userData);
  db.query(
    "UPDATE `alumniupdate` SET ? WHERE aid = ?",
    [req.body.userData, id],
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
};

//login
exports.userLogin = (req, res) => {
  db.query(
    "SELECT * from registration WHERE email = ? and password = ?",
    [req.body.email, req.body.password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        {
          console.log("Done");
          res.send(result);
        }
      }
    }
  );
};

exports.getUser = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * from alumniupdate WHERE aid = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      {
        console.log("Done");
        res.send(result);
      }
    }
  });
};
