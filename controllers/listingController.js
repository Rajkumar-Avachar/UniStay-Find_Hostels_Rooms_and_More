const express = require("express");
const Listing = require("../models/listingModel.js");

module.exports.index = async (req, res) => {
    let listings = await Listing.find();
    res.render("listings/index.ejs", { title: "UniStay | Explore Hostels and Rooms", listings });
};