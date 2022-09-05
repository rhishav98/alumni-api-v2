const express = require("express");
const router = express.Router();

const { savePayments } = require("../controller/paymentController");

router.post("/payments", savePayments);

module.exports = router;