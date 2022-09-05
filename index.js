const express = require("express");
const app = express();

require("./database/db");

const userRoute = require("./router/userRoute");
const paymentRoute = require("./router/paymentRouter");
const port = 5000;

console.log(paymentRoute);
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(userRoute);
app.use(paymentRoute);

//user update
app.post("/userupdatedetails", (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const centre = req.body.centre;
    const course = req.body.course;
    const contact = req.body.contact;
    const linkedin = req.body.linkedin;
    const address = req.body.address;
    const state = req.body.state;
    const occupation = req.body.occupation;
    const currentwork = req.bosy.currentwork;
    const courseyear = req.body.courseyear;
    const pic = req.body.pic;
    db.query(
        "INSERT INTO alumniupdate(firstname, lastname, centre, course, contact, linkedin, address, state, occupation, currentwork, courseyear, pic) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)" [
            (firstname,
                lastname,
                centre,
                course,
                contact,
                linkedin,
                address,
                state,
                occupation,
                currentwork,
                courseyear,
                pic)
        ],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
app.get("/userupdatedetails", (req, res) => {
    res.send("user update");
});
app.get("/registration", (req, res) => {
    res.send("registration page");
});
app.get("/login", (req, res) => {
    res.send("login page");
});
app.get("/", (req, res) => {
    res.send("hello world");
});
app.get("/userupdatedetails", (req, res) => {
    res.send("user update");
});

app.post("/login", (req, res) => {
    db.query(
        "SELECT * from registration WHERE email = ? and password = ?", [req.body.email, req.body.password],
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
});

app.listen(port, () => {
    console.log(`server is running ar port ${port}`);
});