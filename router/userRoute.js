const express = require("express");
const router = express.Router();
const {
  userRegistration,
  userUpdateDetails,
  userLogin,
  getUser,
  userUpdate,
} = require("../controller/userController");

router.post("/registration", userRegistration);
router.post("/userupdatedetails/:id", userUpdate);
router.post("/login", userLogin);
router.get("/user/:id", getUser);
module.exports = router;
