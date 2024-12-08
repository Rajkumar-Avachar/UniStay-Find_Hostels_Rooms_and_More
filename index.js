const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const MongoStore = require('connect-mongo');

const listingRoutes = require("./routes/listingRoutes.js");

if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("ejs", ejsMate);
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));



async function main() {
    const mongoURI = process.env.MONGO_URI;

    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB Atlas successfully!");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}
main();



app.use("/", listingRoutes);




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

