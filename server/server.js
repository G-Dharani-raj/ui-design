const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => res.send("Hello"));
app.listen(8080, () => {
	connectDB();
	console.log("Connected");
});
