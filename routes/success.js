const path = require("path");
const express = require("express");
const router = express.Router();
const contactController = require("../controller/contact");
router.post("/success",contactController.successPage);

module.exports = router;
