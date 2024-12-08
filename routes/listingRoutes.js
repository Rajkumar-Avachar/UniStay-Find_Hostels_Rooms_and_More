const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listingController.js");


router.get("/", listingController.index);







module.exports = router;