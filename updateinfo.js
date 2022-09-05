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