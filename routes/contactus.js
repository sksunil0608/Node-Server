const path = require("path");
const express = require("express");
const router = express.Router();
const contactController = require("../controller/contact");
router.get("/contactus",contactController.contact);

module.exports = router;
