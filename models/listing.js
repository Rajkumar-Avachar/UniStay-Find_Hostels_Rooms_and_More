const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title: String,
    name: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;