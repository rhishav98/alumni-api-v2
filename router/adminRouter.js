const express = require("express");
const router = express.Router();
const { adminNotifications } = require("../controller/adminController");

router.post("/adminNotifications", adminNotifications);

module.exports = router;